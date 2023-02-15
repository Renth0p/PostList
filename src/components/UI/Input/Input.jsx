import React from 'react';

import cn from './input.module.sass'
function Input(props) {
    return (
        <input className={cn.inputItem} {...props}></input>
    );
}

export default Input;