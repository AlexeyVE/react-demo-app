const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const GET_USERS_COUNT = 'GET-USERS-COUNT'
const TOGGLE_LOADER = 'TOGGLE-LOADER'

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
}

const usersReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_USERS : 
    return { ...state,users:action.users }
    case FOLLOW :
    return { 
      ...state,
      users: state.users.map( user => {
        if (user.id === action.userId) {
          return {...user, followed : true}
        }
      return user
      }) 
    }
    case UNFOLLOW :
    return {
      ...state,
      users: state.users.map( user => {
        if (user.id === action.userId) {
          return {...user, followed : false}
        }
        return user
      }) 
    }
    case SET_CURRENT_PAGE :
      return {...state, currentPage: action.currentPage}    
    case GET_USERS_COUNT : 
      return {...state , totalUsersCount: action.count }
    case TOGGLE_LOADER :
      return {...state, isFetching: action.bool }   
    default : return state
  }
}

export const followCreator = ( userId ) => ({ type: FOLLOW, userId })//userId-payload

export const unfollowCreator = ( userId ) => ({ type: UNFOLLOW, userId })

export const getUsersCreator = ( users ) => ({ type : GET_USERS, users })

export const changePageCreator = ( currentPage ) => ({type:SET_CURRENT_PAGE , currentPage })

export const getUsersCountCreator = ( count ) => ({ type:GET_USERS_COUNT, count })

export const toggleLoaderCreator = ( bool ) => ({ type:TOGGLE_LOADER, bool })

export default usersReducer