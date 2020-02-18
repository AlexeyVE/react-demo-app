import React from 'react'
import style from './profileInfo.module.scss'

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  componentDidUpdate ( prevProps, prevState ) {
    if ( prevProps.status != this.props.status ) {
      this.setState ({
        status: this.props.status
      })
    }
  }
  enableEditMode = () => {    
    this.setState({
      editMode: true,
    })
  }
  disableEditMode = () => {
    this.setState( {
      editMode: false,
    })
    this.props.updateStatus( this.state.status )
  }
  onInputChange = ( e ) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  render () {
    return (
      <div className = { style.status }>
        { !this.state.editMode &&
          <div>
            <span onClick = { this.enableEditMode }>{ this.state.status || 'x_x'}</span>
          </div>
        }
        { this.state.editMode &&
            <div>  
              <input onChange = { this.onInputChange }
                     autoFocus = { true }
                     onBlur = { this.disableEditMode } 
                     type = "text" value = { this.state.status } />
            </div>  
          }
        </div>
    )
  }
}
