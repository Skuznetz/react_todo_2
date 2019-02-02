import React from 'react'

class ItemStatusFilter extends React.Component {
    buttons = [{name: 'all',label: 'All'},
               {name: 'active',label: 'Active'},
               {name: 'done',label: 'Done'}]
    render(){
    return (
        <div className="btn-group">
            <button type="button" 
                    className="btn btn-info">All</button>
            <button type="button" 
                    className="btn btn-outline-secondary">Active</button>
            <button type="button" 
                    className="btn btn-outline-secondary">Done</button>
        </div>
    )
    }
}
export default ItemStatusFilter