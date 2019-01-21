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
        this.createTodoItem('Проснёмся'),
        this.createTodoItem('Завтракаем'),
        this.createTodoItem('Уходим')
             
    ]}
    
    createTodoItem(label) {
        return {
            label,important:false,done:false,id: this.maxId++
        }
    }
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
        const newItem = this.createTodoItem(text)
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

