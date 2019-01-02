import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header/app-header.js'
import Search from './components/search/search.js'
import TodoList from './components/todo-list/todo-list.js'


const App = () =>{
    const todoData = [
        {label: 'Просыпаемся',important: false,id: 1},
        {label: 'Завтракаем',important: false,id:2},
        {label: 'уходим',important: false,id:3}        
    ]
    return (
    <div>
        <AppHeader />
        <Search />
        <TodoList todos = {todoData} />
</div>)
}

ReactDOM.render(<App />,document.getElementById('root'))