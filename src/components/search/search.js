import React,{Component} from 'react'
import './search.css'
class Search extends Component {
    state = {term: ''}
    return(){
    return (
        <input value={this.state.term} placeholder="search" />
    )
    }
}
export default Search