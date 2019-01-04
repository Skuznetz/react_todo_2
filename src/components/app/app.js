import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from '../app-header'
import Search from '../search'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'


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

export default App