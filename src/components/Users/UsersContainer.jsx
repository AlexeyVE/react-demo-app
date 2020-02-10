import React from 'react'
import { connect } from 'react-redux'
import { followCreator,
         unfollowCreator,
         getUsersCreator,
         changePageCreator,
         getUsersCountCreator,
         toggleLoaderCreator, } from '../../redux/usersReducer'
import Users from './Users'

let mapStateToProps = ( state ) => {
  return {
    users : state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching : state.usersPage.isFetching
  }
}
// let mapDispatchtoProps = ( dispatch ) => {
//   return {
//      follow: ( userId ) => {
//       return dispatch( followCreator (userId))
//      },
//      unfollow: ( userId ) => {
//       return dispatch ( unfollowCreator (userId) )
//      },
//      getUsers : ( user ) => {
//       return dispatch ( getUsersCreator (user) )
//      },
//      setCurrentPage: ( pageNumber ) => {
//       return dispatch ( changePageCreator( pageNumber ) )
//      },
//      getUsersCount: ( count ) => {
//       return dispatch ( getUsersCountCreator( count ) )
//      },
//      toggleLoader : ( bool ) => {
//       return dispatch( toggleLoaderCreator ( bool ))
//      } 
//   }
// }

let mapDispatchtoProps = {
     follow: followCreator,
     unfollow: unfollowCreator, 
     getUsers: getUsersCreator,
     setCurrentPage: changePageCreator,
     getUsersCount: getUsersCountCreator,
     toggleLoader: toggleLoaderCreator,
} 

export default connect( mapStateToProps,mapDispatchtoProps )( Users )
