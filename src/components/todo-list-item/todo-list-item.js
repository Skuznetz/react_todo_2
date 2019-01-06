import React from 'react'
import './todo-list-item.css'

class TodoListItem extends React.Component {
    constructor(){
        super()
        
    }
    render() {
        const {label,important = false} = this.props
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
</span>
     
      <button type="button"
              className="btn btn -outline-success btn-sm float-right" >
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" 
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
</div>)
    }
}
export default TodoListItem