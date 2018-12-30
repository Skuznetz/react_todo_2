import React from 'react'

import TodoListItem from './todo-list-item'
const TodoList = () => {
    return (
         <ul>
            <li><TodoListItem label="Привет Иван" /></li>
            <li><TodoListItem label="Привет Андрей" /></li>
        </ul>
    )
}
export default TodoList