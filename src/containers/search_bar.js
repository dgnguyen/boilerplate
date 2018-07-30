import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }
  onFormSubmit = e => {
    e.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          onChange={e => this.setState({ term: e.target.value })}
          placeholder="Get a five day forecast in your favaorites cities"
          value={this.state.term}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
