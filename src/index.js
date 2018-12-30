import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header/app-header.js'
import Search from './components/search/search.js'
import TodoList from './components/todo-list/todo-list.js'


const App = () =>{
    return (
    <div>
        <AppHeader />
        <Search />
        <TodoList />
</div>)
}

ReactDOM.render(<App />,document.getElementById('root'))