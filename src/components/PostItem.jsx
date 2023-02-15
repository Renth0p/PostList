import React from 'react';

import cn from './style.module.sass'
import Button from "./UI/Button/Button.jsx";

function PostItem(props) {
    return (
        <div className={cn.postItem}>
            <div>
                <strong className={cn.postItemTitle}>{props.number}. {props.post.title}</strong>
                <p className={cn.postItemDescription}>{props.post.description}</p>
            </div>
            <Button onClick={() => props.remove(props.post)}>Удалить</Button>
        </div>
    );
}

export default PostItem;