import React from 'react';
import './Button.css'
function Button({className='', onClick, children}){
    const classNames = `Button ${className}`
    return <button className = {classNames} onClick = {onClick}>{children}</button>
}

export default Button;