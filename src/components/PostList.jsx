import React from 'react';
import PostItem from "./PostItem.jsx";

function PostList({post, remove}) {

    if(!post.length) {
        return (
            <h1>Посты не найдны</h1>
        )
    }

    return (
        <div>
            {
                post.map((post, index) =>
                    <PostItem key={post.id} remove={remove} post={post} number={index + 1} />
                )
            }
        </div>
    );
}

export default PostList;