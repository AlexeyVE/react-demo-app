import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required,length } from 'redux-form-validators'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let MessageForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit = { props.handleSubmit }>
      <div>
        <Field component = { renderField } 
               placeholder = "new message"
               name = "msgBody"
               validate = { required() ,length( { min:2,max:10 } ) }/>
      </div>
      <div>
        <button type="submit" disabled = { submitting }>Submit</button>
        <button type="button" disabled = { pristine || submitting } onClick = { reset }>Clear Values</button>
      </div>
    </form>
    )
}
export default reduxForm({
  form: "message_form"
})( MessageForm )
