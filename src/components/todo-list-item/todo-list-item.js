import React from 'react'

const TodoListItem = ({label,important = false}) => {
    const style = {
        color: important ? 'aqua' : 'black'
    }
    return(
    <div 
        className="todo-list-item" 
        style={style}>
        {label}
    </div>)
}
export default TodoListItem