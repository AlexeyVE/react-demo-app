import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AddPostForm = ( props ) => {
  return (
    <div>
      <form onSubmit = { props.handleSubmit } >
        <div>
          <Field name = "postBody" 
                 component = "textarea"
                 placeholder = "new post text"/>
        </div>
        <button>Add post</button>
      </form>
    </div>
  )
}
export default reduxForm( {
  form: "newPostText"
} )( AddPostForm )