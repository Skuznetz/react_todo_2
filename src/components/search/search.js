import React,{Component} from 'react'
import './search.css'
class Search extends Component {
    state = {term: ''}
    return(){
    return (
        <input placeholder="search" />
    )
    }
}
export default Search