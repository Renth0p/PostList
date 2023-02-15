import React from 'react';

import cn from './modal.style.sass'

function MyModal({children}) {
    return (
        <div className={cn.myModal}>
            <div className={cn.myModalContent}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;