import React from 'react'

import TodoListItem from '../todo-list-item/todo-list-item.js'
const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        return (
            <li> 
                <TodoListItem {...item} />
            </li>
        )
    })
    return (
         <ul>
            {elements}
        </ul>
    )
}
export default TodoList