import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }
  onFormSubmit = e => {
    e.preventDefault()
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
