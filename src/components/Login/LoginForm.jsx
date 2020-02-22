import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required ,length, email } from 'redux-form-validators'

import style from './login.module.scss'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div className = { style.err }>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let LoginForm = props => {
  return  (
    <form className = { style.loginForm } onSubmit = { props.handleSubmit }>
      <div>
        <label htmlFor="email">Email</label>
        <Field name = "email" 
               validate = { [ required(),email() ] } 
               component = { renderField }
               type = "email" />
      </div>
      <div>
        <label htmlFor = "password" >password</label>
        <Field name = "password" 
               validate = { [required() ,length({ min:6 })] } 
               component = { renderField } 
               type = "password"
               />
      </div>
      <div>
        <label htmlFor = "remember">remember me</label>
        <Field name = "remember" component = { renderField } type = "checkbox"/>
      </div>
      <button type="submit" >Login</button>
    </form>
  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)