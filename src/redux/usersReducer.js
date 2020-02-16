import { usersAPI } from '../api/'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const GET_USERS_COUNT = 'GET-USERS-COUNT'
const TOGGLE_LOADER = 'TOGGLE-LOADER'
const TOGGLE_IN_PROGRESS = 'TOGGLE-IN-PROGRESS'

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  inProgress: false
}

const usersReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_USERS : 
    return { ...state,users:action.users }
    case FOLLOW :
    return { 
      ...state,
      users: state.users.map( user => {
        if ( user.id === action.userId ) {
          return { ...user, followed : true }
        }
      return user
      }) 
    }
    case UNFOLLOW :
    return {
      ...state,
      users: state.users.map( user => {
        if ( user.id === action.userId ) {
          return { ...user, followed : false }
        }
        return user
      }) 
    }
    case SET_CURRENT_PAGE :
      return { ...state, currentPage: action.currentPage }    
    case GET_USERS_COUNT : 
      return { ...state , totalUsersCount: action.count }
    case TOGGLE_LOADER :
      return { ...state, isFetching: action.bool }
    case TOGGLE_IN_PROGRESS : 
      return{ ...state, inProgress : action.inProgress }     
    default : return state
  }
}

export const getUsersThunkCreator = ( currentPage, pageSize ) => {
  return ( dispatch ) => {
    dispatch( toggleLoaderCreator( true ) )
    usersAPI.fetchData( currentPage, pageSize )
    .then( res => { 
      dispatch( getUsersCreator( res.items ) )
      dispatch( getUsersCountCreator( res.totalCount ) )
      dispatch( toggleLoaderCreator( false ) )
    })
  }
}
export const changePageThunkCreator = ( pageNumber, pageSize ) => {
  return ( dispatch ) => {
      dispatch( toggleLoaderCreator ( true ) )
      dispatch( changePageCreator( pageNumber ) )
      usersAPI.fetchData( pageNumber, pageSize )
      .then( res => { 
        dispatch( getUsersCreator ( res.items ))
        dispatch( toggleLoaderCreator( false ))
    })
  }
}


export const followCreator = ( userId ) => ({ type: FOLLOW, userId })//userId-payload

export const unfollowCreator = ( userId ) => ({ type: UNFOLLOW, userId })

export const getUsersCreator = ( users ) => ({ type : GET_USERS, users })

export const changePageCreator = ( currentPage ) => ({ type:SET_CURRENT_PAGE , currentPage })

export const getUsersCountCreator = ( count ) => ({ type:GET_USERS_COUNT, count })

export const toggleLoaderCreator = ( bool ) => ({ type:TOGGLE_LOADER, bool })

export const toggleInProgressCreator = ( bool ) => ({ type:TOGGLE_IN_PROGRESS,bool })

export default usersReducer