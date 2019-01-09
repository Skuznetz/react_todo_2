import React,{Component} from 'react'

import AppHeader from '../app-header'
import Search from '../search'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css'

export default class App extends Component {
    state ={ todoData: [
        {label: 'Просыпаемся',important: false,id: 1},
        {label: 'Завтракаем',important: false,id:2},
        {label: 'уходим',important: false,id:3}        
    ]}
    render(){
    return (
    <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
            <Search />
            <ItemStatusFilter />
        </div>
        <TodoList todos = {this.state.todoData}
                  onDeleted={(id) => console.log('del',id)} />
</div>)}
}

