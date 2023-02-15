import React, {useState} from 'react';
import Input from "./UI/Input/Input.jsx";
import Button from "./UI/Button/Button.jsx";

function PostForm({create}) {


    const [posts, setPosts] = useState({
        title: '', description: ''
    })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...posts, id: Date.now()
        }
        // Сама callback фунция которая передаёт в себя newPost
        create(newPost)
        //
        setPosts({title: '', description: '' })
    }

    return (
        <form style={{marginTop: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column'}}>
            <Input
                type="text"
                placeholder="Введите название"
                value={posts.title}
                onChange={e => setPosts({...posts, title: e.target.value})}
            />
            <Input
                type="text"
                placeholder="Введите описание"
                value={posts.description}
                onChange={e => setPosts({...posts, description: e.target.value})}
            />
            <Button onClick={addNewPost}>Создать</Button>
        </form>
    );
}

export default PostForm;