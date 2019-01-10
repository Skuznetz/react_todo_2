import React,{Component} from 'react'
import './item-add-form.css'

export default class ItemAddForm extends Component{
    render(){
        return (
            <div>
                <input type="text"
                       className="form-control"
                       placeholder="What needs to be done"
                 />
                <button  className="btn btn-outline-secondary">Add item</button>
            </div>
        )
    }
}