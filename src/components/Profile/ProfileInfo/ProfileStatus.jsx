import React from 'react'

export default class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }
  changeSatus = () => {    
    this.setState( {
      editMode : !this.state.editMode
    })
  }
  render () {
    return (
      <div>
      <button onClick = {this.changeSatus } >Изменить статус</button>  
        { !this.state.editMode &&
          <div>
            <span> { this.props.status } </span>
          </div>
        }
        { this.state.editMode &&
          <div>  
            <input type = "text" defaultValue = { this.props.status } />
          </div>  
        }
      </div>
    )
  }
}
