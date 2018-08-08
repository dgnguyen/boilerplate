import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
          {...field.input} // ... handle all event handler
        />
      </div>
    )
  }
  render() {
    return (
      <form>
        <Field name="title" component={this.renderTitleField} />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew)
