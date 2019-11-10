import { connect } from 'react-redux'
import React, { Component } from 'react'
class UnconnectedSearch extends Component {
    handleQuery = evt => {
        this.props.dispatch({ type: 'query', q: evt.target.value })
    }
    handleMinimumPrice = evt => {
        let price = parseInt(evt.target.value)
        this.props.dispatch({ type: 'minimum-price', price: price })
    }
    handleMaximumPrice = evt => {
        let price = parseInt(evt.target.value)
        this.props.dispatch({ type: 'maximum-price', price: price })
    }
    handleStockToggle = evt => {
        this.props.dispatch({ type: 'only-in-stock', value: evt.target.checked })
    }
    clearForm = () => {
        this.props.dispatch({ type: "clear-form" })
    }
    render = () => {
        return (
            <div>
                <div>
                    Search query
                    <input type="text" onChange={this.handleQuery} value={this.props.query} />
                </div>
                <div>
                    Minimum price
                    <input type="text" onChange={this.handleMinimumPrice} value={this.props.minPrice} />
                </div>
                <div>
                    Maximum price
                    <input type="text" onChange={this.handleMaximumPrice} value={this.props.maxPrice} />
                </div>
                <div>
                    In stock
                    <input type="checkbox" onChange={this.handleStockToggle} checked={this.props.stockChecked} />
                </div>
                <button type="button" onClick={this.clearForm}>Clear the form</button>
            </div>)
    }
}
let mapStateToProps = st => {
    return {
        query: st.searchQuery,
        minPrice: st.min,
        maxPrice: st.max,
        stockChecked: st.onlyInStock
    }
}
let Search = connect(mapStateToProps)(UnconnectedSearch)
export default Search 