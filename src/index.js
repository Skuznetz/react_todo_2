import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import Search from './component/search'
import TodoList from './todo-list'


const App = () =>{
    return (
    <div>
        <AppHeader />
        <Search />
        <TodoList />
</div>)
}

ReactDOM.render(<App />,document.getElementById('root'))