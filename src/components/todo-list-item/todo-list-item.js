import React from 'react'

const TodoListItem = ({label,important = false}) => {
    const style = {
        color: important ? 'aqua' : 'black'
    }
    return(
    <div 
        className="todo-list-item" >
        <span
        className="todo-list-item-label"
        style={style}>
        {label}
</span>)
     
      <button type="button"
              className="btn btn -outline-success btn-sm float-right" 
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" 
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </div>)
}
export default TodoListItem