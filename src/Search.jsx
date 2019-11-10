import { connect } from 'react-redux'
import React, { Component } from 'react'
class UnconnectedSearch extends Component {
    constructor(props) {
        super(props)
        // We're doing this with local state, but we could have done it with redux.
        // The method you choose depends on personal preference.
        this.state = {
            showPriceFilter: false
        }
    }
    handleQuery = evt => {
        this.props.dispatch({ type: 'query', q: evt.target.value })
    }
    handleMinimumPrice = evt => {
        this.props.dispatch({ type: 'minimum-price', price: evt.target.value })
    }
    handleMaximumPrice = evt => {
        this.props.dispatch({ type: 'maximum-price', price: evt.target.value })
    }
    handleStockToggle = evt => {
        this.props.dispatch({ type: 'only-in-stock', value: evt.target.checked })
    }
    clearForm = () => {
        this.props.dispatch({ type: "clear-form" })
    }
    displayPriceFilter = () => {
        if (!this.state.showPriceFilter) return null
        return (<div>
            <div>
                Maximum price
                    <input type="text" onChange={this.handleMaximumPrice} value={this.props.maxPrice} />
            </div>
            <div>
                Minimum price
                    <input type="text" onChange={this.handleMinimumPrice} value={this.props.minPrice} />
            </div>
        </div>)
    }
    togglePriceRange = () => {
        this.setState({ showPriceFilter: !this.state.showPriceFilter })
    }
    render = () => {
        return (
            <div>
                <div>
                    Search query
                    <input type="text" onChange={this.handleQuery} value={this.props.query} />
                </div>
                <div>
                    In stock
                    <input type="checkbox" onChange={this.handleStockToggle} checked={this.props.stockChecked} />
                </div>
                {this.displayPriceFilter()}
                <button type="button" onClick={this.clearForm}>Clear the form</button>
                <button type="button" onClick={this.togglePriceRange}>Toggle price filters</button>
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