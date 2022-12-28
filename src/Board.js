import React from 'react';
import Dice from './Dice'
function Board({user, color, historyList}){
    //useState를 써서 해당 변수의 값을 효율적으로 바꿀 수 있음
    console.log(historyList)
    const num = historyList[-1] || 1
    const sum = historyList.reduce((a,b) => a+b, 0)
    return(
        <div>
            <h2>{user}</h2>
            <Dice color={color} num = {num}></Dice>
            <h2>{user}의 총점</h2>
            <p>{sum}</p>
            <h2>{user}의 기록</h2>
            <p>{historyList.join(', ')}</p>
        </div>
        
    )
}

export default Board