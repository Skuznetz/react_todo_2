import React,{Component} from 'react'

import AppHeader from '../app-header'
import Search from '../search'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {
    maxId = 100
    state ={ todoData: [
        {label: 'Просыпаемся',important: false,id: 1},
        {label: 'Завтракаем',important: false,id:2},
        {label: 'уходим',important: false,id:3}        
    ]}

    deleteItem=(id)=>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id ===id)
            const newArray = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1)
            ]
            return {
                todoData: newArray
            }
        })
    }

    ItemAdd = (text) => {
        const newItem={
            label: text,
            important: false,
            id: this.maxId++
        }
        this.setState(({ todoData }) => {
            const newArr= [
                ...todoData,
                newItem
            ]
            return {
                todoData: newArr
            }
        })
    }
    onToggleImportant = (id) => {
        console.log('important',id)
    }
    onToggleDone = (id) => {
        console.log('done',id)
    }
    render(){
    return (
    <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
            <Search />
            <ItemStatusFilter />
        </div>
        <TodoList todos = {this.state.todoData}
                  onDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone} />
        <ItemAddForm onItemAdd={this.ItemAdd} />
</div>)}
}

