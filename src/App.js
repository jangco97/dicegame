import Dice from './Dice';
import React, { useState } from 'react';
import Button from './Button';

function random(n){
    return Math.ceil(Math.random()*n)
}


function App() {
    //useState를 써서 해당 변수의 값을 효율적으로 바꿀 수 있음
    const [num, setNum] = useState(1)
    const [sum, setSum] = useState(0)
    const [gameHistory, setGameHistory] = useState([])
    console.log(gameHistory)
    const handleRollClick = () => {
        const nextNum = random(6)
        setNum(nextNum)
        setSum(sum + nextNum)
        console.log(typeof gameHistory)
        //배열의 경우 참조형이기 때문에 배열에 값을 넣어도 주소값이 변하지 않는다.
        //useState는 주소값이 변해야 값이 변했다고 인지하고 재렌더링을 하기 때문에 아래와 같이 spread를 이용해 
        //새로운 배열에 값을 할당해야함
        setGameHistory([...gameHistory, nextNum])
        console.log(gameHistory)
    }
    const handleClearClick = () => {
        setNum(1)
        setSum(0)
        setGameHistory([])
    }
    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <h2>나</h2>
            <Dice color="red" num = {num}></Dice>
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p></p>
        </div>
    )
}

export default App;