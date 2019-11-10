import { connect } from 'react-redux'
import React, { Component } from 'react'
import data from './data.js'
class UnconnectedSearchResults extends Component {
    render = () => {
        let results = data.filter(item => {
            return item.name.includes(this.props.query) &&
                item.price > this.props.minP &&
                item.price < this.props.maxP &&
                item.inStock === this.props.stockedToggle
        })
        return (<div>
            {results.map(r => {
                return (<div>{r.name}</div>)
            })}
        </div>)
    }
}
let mapStateToProps = st => {
    return {
        query: st.searchQuery,
        minP: st.min,
        maxP: st.max,
        stockedToggle: st.onlyInStock
    }
}
let SearchResults = connect(mapStateToProps)(UnconnectedSearchResults)
export default SearchResults  