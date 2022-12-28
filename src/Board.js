import React from 'react';
import Dice from './Dice'
import './Board.css'
function Board({user, color, historyList, className=''}){
    //useState를 써서 해당 변수의 값을 효율적으로 바꿀 수 있음
    console.log(historyList.slice(-1))
    console.log(historyList[-1])
    //리스트를 받은 것을 통해서 총점과 마지막 값을 반환하는 것을 자식 컴포넌트인 Board에서 처리하여
    //부모에서부터 받은 prop을 다르게 return해준다. 
    const num = historyList[historyList.length - 1] || 1
    console.log(num)
    const sum = historyList.reduce((a,b) => a + b, 0)
    const classNames = `Board App-board ${className}`
    console.log(classNames)
    let FontColor = ''
    if(className === 'Board-winner'){
        FontColor = 'FontColor'
    }else{
        FontColor = 'Board-heading'
    }
    console.log(FontColor)
    return(
        <div className= {classNames}>
            <h2 className= {FontColor}>{user}</h2>
            <Dice color={color} num = {num}></Dice>
            <h2 className= {FontColor}>{user}의 총점</h2>
            <p>{sum}</p>
            <h2 className= {FontColor}>{user}의 기록</h2>
            <p>{historyList.join(', ')}</p>
        </div> 
    )
}

export default Board;