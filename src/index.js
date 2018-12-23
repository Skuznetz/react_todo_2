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
const el = (
    <div>
        <h1>Todo list</h1>
        <input placeholder="search" />
        
        </div>)

ReactDOM.render(<App />,document.getEle