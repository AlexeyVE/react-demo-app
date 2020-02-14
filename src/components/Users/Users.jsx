import React from 'react'
import User from './User/User'
import { api } from '../../api/'
import style from './users.module.css'
import Preloader from '../common/Preloader/'

class Users extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let currentPage = this.props.currentPage,
        pageSize = this.props.pageSize
    this.props.getUsers( currentPage, pageSize )
    // this.props.toggleLoader( true )
    // api.getUsers( this.props.currentPage, this.props.pageSize )
    // .then( res => { 
    //   this.props.getUsers( res.items )
    //   this.props.getUsersCount( res.totalCount )
    //   this.props.toggleLoader( false )
    // })
  }
  onPageChanged = ( pageNumber ) => {
    this.props.changePage( pageNumber, this.props.pageSize )
    //   this.props.toggleLoader( true )
    //   this.props.setCurrentPage( pageNumber )
    //   api.getUsers( pageNumber, this.props.pageSize )
    //   .then( res => { 
    //     this.props.getUsers( res.items )
    //     this.props.toggleLoader( false )
    // })
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
            userId = { user.id } 
            name = { user.name }
            followed = { user.followed }
            photos = { user.photos.small }
            location = {" user.location "}
            status = { user.status }
            follow = { this.props.follow }
            unfollow = { this.props.unfollow }/>) }
      </div>
      )
  }
}


export default Users