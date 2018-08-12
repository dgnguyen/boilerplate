import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends Component {
  renderField(field) {
    const classNameField =
      field.meta.touched && field.meta.error
        ? 'form-group has-danger'
        : 'form-group'
    const classNameError =
      field.meta.touched && field.meta.error ? 'text-help' : ''
    return (
      <div className={classNameField}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // ... handle all event handler
        />
        <div className={classNameError}>
          {field.meta.touched && field.meta.error}
        </div>
      </div>
    )
  }
  onSubmit(values) {
    this.props.createPost(values, () => this.props.history.push('/'))
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field label="Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}
  if (!values.title) errors.title = 'Enter a title'
  if (!values.categories) errors.categories = 'Enter a category'
  if (!values.content) errors.content = 'Enter a content'

  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
)
