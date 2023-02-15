import React from 'react';

import cn from './button.module.sass'
function Button({children, ...props}) {
    return (
        <button className={cn.postItemBtn} {...props}>
            {children}
        </button>
    );
}

export default Button;