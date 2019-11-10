import { connect } from 'react-redux'
import React, { Component } from 'react'
import data from './data.js'
class UnconnectedSearchResults extends Component {
    render = () => {
        let results = data.filter(item => {
            let minimumPrice = parseInt(this.props.minP)
            let maximumPrice = parseInt(this.props.maxP)
            let minPriceCheck = !isNaN(minimumPrice) && item.price > minimumPrice
            let maxPriceCheck = !isNaN(maximumPrice) && item.price < maximumPrice
            return item.name.includes(this.props.query) &&
                minPriceCheck &&
                maxPriceCheck &&
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