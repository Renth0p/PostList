import React from 'react';
import Input from "./UI/Input/Input.jsx";
import MySelect from "./UI/Select/MySelect.jsx";

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <Input
                placeholder={'Поиск'}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <div>
                <MySelect
                    defaultValue="Сортировка"
                    option={[{value: 'title', name: 'По названию'}, {value: 'description', name: 'По описанию'}]}
                    value={filter.query}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                />
            </div>
        </div>
    );
}

export default PostFilter;