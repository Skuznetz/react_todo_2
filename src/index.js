import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header/app-header.js'
import Search from './components/search/search.js'
import TodoList from './components/todo-list/todo-list.js'


const App = () =>{
    const todoData = [
        {label: 'Просыпаемся',important: false},
        {label: 'Завтракаем',important: false},
        {label: 'уходим',important: false}        
    ]
    return (
    <div>
        <AppHeader />
        <Search />
        <TodoList todos = {todoData} />
</div>)
}

ReactDOM.render(<App />,document.getElementById('root'))