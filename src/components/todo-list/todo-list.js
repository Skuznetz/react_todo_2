import React from 'react'

import TodoListItem from '../todo-list-item/todo-list-item.js'
const TodoList = () => {
    return (
         <ul>
            <li><TodoListItem 
            label="Привет Иван"
            important /></li>
            <li><TodoListItem label="Привет Андрей" /></li>
        </ul>
    )
}
export default TodoList