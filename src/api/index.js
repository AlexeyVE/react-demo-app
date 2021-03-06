import * as axios from 'axios'

//  export const getUsers = ( currentPage , pageSize ) => {
//   let url = "https://social-network.samuraijs.com/api/1.0/users"
//   let params = {
//     page: currentPage,
//     count: pageSize,
//     withCredentials: true
//   }
//   return axios.get( url, { params } )
//   .then( res => res.data )
//   .catch( err => console.log( err ))      
// }

let instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY" : "997b5ad2-6cec-45f5-8b70-71df99852bbb"
  }
})
export const usersAPI = {
  fetchData: ( currentPage , pageSize ) => {
    let params = { 
      page: currentPage,
      count: pageSize,
    }
    return instance.get( '/users', { params })
           .then( res => res.data )
           .catch( err => console.log( err )) 
  },
  follow: ( userId ) => instance.post('/follow/' + userId ),
  unfollow: ( userId ) => instance.delete('/follow/' + userId ),
}
export const profileAPI = {
  getProfile: ( userId ) => instance.get( '/profile/' + userId ),
  getProfileStatus :( userId ) => {
    return instance.get('/profile/status/' + userId )
  },
  updateStatus: ( status ) => {
    return instance.put( '/profile/status', { status: status } )
  }
}
export const authAPI = {
  me: () => {
    return instance.get( '/auth/me' )
  },
  login: ( email, password, reMe = false ) => {
    return instance.post( '/auth/login', { email, password, reMe } )
  },
  logout: () => {
    return instance.delete( '/auth/login' )
  }
}


