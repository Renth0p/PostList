import {useState, useMemo} from "react";
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import MySelect from "./components/UI/Select/MySelect.jsx";
import Input from "./components/UI/Input/Input.jsx";
import PostFilter from "./components/PostFilter.jsx";
import MyModal from "./components/UI/Modal/MyModal.jsx";

function App() {
    const [post, setPost] = useState([
        {id: 1, title: 'JavaScript', description: 'JavaScript - язык для лучших людей'},
        {id: 2, title: 'Python', description: 'Python - язык для змеюк'},
        {id: 3, title: 'PHP', description: 'PHP - язык для бек(жопа)'},
        {id: 4, title: 'Ruby', description: 'Ruby - я не знаю зачем он'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...post].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return post;
    }, [filter.sort, post]);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(posts => posts.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts]);

    function removePost(posts) {
        setPost(post.filter(p => p.id !== posts.id)) // filter позволяет удалить тот элемент по фильтру который прописан. В нем он сравнивает ID между друг другом
    }

    // CallBack Function берет новый масив из PostForm и в функции createPost вставляет его в конец
    function createPost(newPost) {
        setPost([...post, newPost])
    }

    return (
        <>
            <MyModal>gagagaga</MyModal>
            <PostForm create={createPost}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList post={sortedAndSearchPosts} remove={removePost}/>
        </>
    )
}

export default App

