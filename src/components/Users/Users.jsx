import React from 'react'
import axios from 'axios'
import User from './User/User'
import style from './users.module.css'
import Preloader from '../common/Preloader/'

class UsersC extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.toggleLoader( true )
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(res => { 
      this.props.getUsers(res.data.items)
      this.props.getUsersCount( res.data.totalCount )
      this.props.toggleLoader( false )
    })
  }
  onPageChanged = ( pageNumber ) => {
      this.props.setCurrentPage( pageNumber )
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => { 
        this.props.getUsers( res.data.items )
    })
  }
  render() {
    let pagesCount = this.props.totalUsersCount/this.props.pageSize
    let pages = []
    for (let i =1 ;i <= Math.ceil(pagesCount); i++ ){
      pages.push( i )
    } 
    return (
      <div className = { style.users }>
        { this.props.isFetching 
          ? <Preloader /> : null }
        <div className = { style.pagination } >
          { pages.map( ( page ,index ) => 
            <span key = {index} 
                  className = { this.props.currentPage === page 
                                ? style.selectedPage
                                : undefined }
                  onClick = { ( e ) => this.onPageChanged( page ) }>
              { page }
            </span>) 
          }
        <span className = { style.totalCount } >
          Total users : { this.props.totalUsersCount }
        </span>  
        </div>
        { this.props.users.map( (user,index) => 
          <User
            key = { user.id } 
            name = { user.name }
            followed = { user.followed }
            userId = { user.id }
            photos = { user.photos.small }
            location = {" user.location "}
            status = { user.status }
            follow = { this.props.follow }
            unfollow = { this.props.unfollow }/>) }
      </div>
      )
  }
}

  
export default UsersC