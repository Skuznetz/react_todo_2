import React from 'react'
import './todo-list-item.css'

class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false
    }
    onLabelClick = ()=>{
        this.setState({
            done: true
        })
        }
    
    render() {
       
        const {label,important = false} = this.props
         const {done} = this.state
        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }
    const style = {
        color: important ? 'aqua' : 'black'
    }
    return(
    <div 
        className={classNames} >
        <span
        className="todo-list-item-label"
        style={style}
        onClick={this.onLabelClick}>
        {label}
</span>
     
      <button type="button"
              className="btn btn-outline-success btn-sm float-right" >
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