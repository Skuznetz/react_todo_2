import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
    return (
         <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    )
}
const AppHeader = () => {
    return (
        <h1>Todo List</h1>
    )
}
const el = (
    <div>
        <AppHeader />
        <input placeholder="search" />
        <TodoList />
        </div>)

ReactDOM.render(<App />,document.getEle