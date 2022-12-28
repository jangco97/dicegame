import React, { useState } from 'react';
import Button from './Button';
import Board from './Board';
import AppLogo from './assets/logo.png'
import './App.css';
function random(n){
    return Math.ceil(Math.random()*n)
}


function App() {
    //나의 board 데이터(num, sum, historylist)와 상대 데이터를 부모 컴포넌트에서 관리한다. 
    //함수들에 의해 데이터가 완성되었으면 그것을 prop을 통해 내려줘서 서로 다른 board컴포넌트가 완성된다.
    const [myHistory, setMyHistory] = useState([])
    const [otherHistory, setOtherHistory] = useState([])
    const [myWinner, setWinner] = useState('')
    const [otherWinner, setOtherWinner] = useState('')
    const handleRollClick = () => {
        const myNextNum = random(6)
        const nextOtherNum = random(6)
        //배열의 경우 참조형이기 때문에 배열에 값을 넣어도 주소값이 변하지 않는다.
        //useState는 주소값이 변해야 값이 변했다고 인지하고 재렌더링을 하기 때문에 아래와 같이 spread를 이용해 
        //새로운 배열에 값을 할당해야함
        setMyHistory([...myHistory, myNextNum])
        setOtherHistory([...otherHistory, nextOtherNum])
        console.log(myHistory)
        console.log(otherHistory)
        if(myNextNum > nextOtherNum){
            setWinner('Board-winner')
            setOtherWinner('')
        } else if(myNextNum < nextOtherNum){
            setOtherWinner('Board-winner')
            setWinner('')
        }else{
            setOtherWinner('')
            setWinner('')
        }
        
    }
    //지우기 버튼 누르면 해당 함수 동작. 나의 state와 상대편 state를 초기화한다.
    const handleClearClick = () => {
        setMyHistory([])
        setOtherHistory([])
        setWinner('')
        setOtherWinner('')
    }
    return (
        <div className='App'>
            <div>
                <img className='App-logo' src={AppLogo}></img>
                <h1 className='App-title'>주사위 게임</h1>
                <div>
                    <Button className='color App-button' onClick={handleRollClick}>던지기</Button>
                    <Button className='color App-button' onClick={handleClearClick}>처음부터</Button>
                </div>
                
            </div>
            <div className='App-boards'>
                <Board user={"나"} color={"blue"} historyList={myHistory} className={myWinner}></Board>
                <Board user={"상대"} color={"red"} historyList={otherHistory} className={otherWinner}></Board>
            </div>              
        </div>
    )
}

export default App;