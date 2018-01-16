// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 02.01.2018
// description: 
// email: <isuthicha@gmail.com>
// -----------------------------------------------
import * as types from './actTypes'
import AuthenApi from '../api/apiAuthen'

export function authLogginIn(){
    return { type: types.AUTH_LOGGING_IN }
}

export function authLoggedIn(data){
    return { type: types.AUTH_LOGGED_IN, payload: data }
}

export function authLoggedOut(){
    return { type: types.AUTH_LOGGED_OUT }
}


// check username and password.
export function checkLogin(username, password){
    return (dispatch) => {
        dispatch(authLogginIn())
        return AuthenApi.fetchLogin(username, password)
            .then((data)=>{
                dispatch(authLoggedIn(data))
            })
            .catch((error)=> {})
    }
}

// logged out user.
export function logout(){
    return function(dispatch){
        dispatch(authLoggedOut())
    }
}