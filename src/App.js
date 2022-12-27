import Dice from './Dice';
import React, { useState } from 'react';
import Button from './Button';

function random(n){
    return Math.ceil(Math.random()*n)
}


function App() {
    const [num, setNum] = useState(1)
    const handleRollClick = () => {
        setNum(random(6))
    }
    const handleClearClick = () => {
        setNum(1)
    }
    return (
        <div>
            <div>
                <Button onClick={handleRollClick}>던지기</Button>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <Dice color="red" num ={num}></Dice>
        </div>
    )
}

export default App;