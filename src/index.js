import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
    return (
         <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    )
}


const App = () =>{
    return (
    <div>
        <AppHeader />
        <Search />
        <TodoList />
</div>)
}

ReactDOM.render(<App />,document.getElementById('root'))