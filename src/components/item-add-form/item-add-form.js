import React,{Component} from 'react'
import './item-add-form.css'

export default class ItemAddForm extends Component{
    state = {label: ''
    }
    onLabelChange = (e) =>{
        this.setState({
            label: e.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control d-flex"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                 />
                <button  className="btn btn-outline-secondary"
                onClick={()=>this.props.onItemAdd('hello')}>Add item</button>
            </form>
        )
    }
}