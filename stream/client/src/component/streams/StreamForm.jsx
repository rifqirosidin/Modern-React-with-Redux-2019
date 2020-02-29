import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


class StreamForm extends Component {

    renderErrors({ touched, error }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }

    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.touched && meta.error ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off" />
                {this.renderErrors(meta)}
            </div>

            // <input onChange={formInput.input.onChange}
            //     value={formInput.input.value}
            // />

        )
    }

    onSubmit = formValues => {        
        this.props.onSubmit(formValues)
    }

    render() {
        // console.log(this.props)
       
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title" />
                    <Field name="description" component={this.renderInput} label="Enter Description" />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }

}
const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "you must enter a title"
    }

    if (!formValues.description) {
        errors.description = "you must enter a description"
    }

    return errors

}

export default reduxForm({
    form: 'StreamForm',
    validate: validate
})(StreamForm)

