import React from 'react'

import AppHeader from '../app-header'
import Search from '../search'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css'

const App = () =>{
    const todoData = [
        {label: 'Просыпаемся',important: false,id: 1},
        {label: 'Завтракаем',important: false,id:2},
        {label: 'уходим',important: false,id:3}        
    ]
    return (
    <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
            <Search />
            <ItemStatusFilter />
        </div>
        <TodoList todos = {todoData} />
</div>)
}

export default App