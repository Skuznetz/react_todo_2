import React,{Component} from 'react'
import './search.css'
class Search extends Component {
    state = {term: ''}
    onSearchChange=(e)=>{
        const term=e.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }
    render(){
    return (
        <input value={this.state.term} onChange={this.onSearchChange} placeholder="search" />
    )
    }
}
export default Search