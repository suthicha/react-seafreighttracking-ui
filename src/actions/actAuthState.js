
import * as types from './actTypes'
import { browserHistory } from 'react-router';

export function addAuthToStorageSuccess(){
    return {
        type: types.ADD_AUTH_STORAGE,
    }
}

export function removeAuthFromStorageSuccess(){
    return {
        type: types.REMOVE_AUTH_STORAGE
    }
}

export function validateAuth(){
    return (dispatch) => {
        const authenticate = localStorage.getItem('authenticate')
        if (authenticate){
            dispatch(addAuthToStorageSuccess())
            // browserHistory.push('home')
        }else {
            dispatch(removeAuthFromStorageSuccess())
            browserHistory.push('login')
        }
    }
}

export function addAuthToSorage(auth, user){
    return (dispatch) => {
        const { authenticate, token } = auth
        const { UserID, LoginName, FirstName, LastName, UserGroupID, Email} = user
        localStorage.setItem('authenticate', authenticate)
        localStorage.setItem('ticket', token)
        localStorage.setItem('userid', UserID)
        localStorage.setItem('username', LoginName)
        localStorage.setItem('fullname', FirstName + ' ' + LastName)
        localStorage.setItem('groupid', UserGroupID)
        localStorage.setItem('email', Email)  
        dispatch(addAuthToStorageSuccess())
    }
}

export function removeAuthFromStorage(){
    return (dispatch) => {
        localStorage.removeItem('authenticate')
        localStorage.removeItem('ticket')
        localStorage.removeItem('userid')
        localStorage.removeItem('username')
        localStorage.removeItem('fullname')
        localStorage.removeItem('groupid')
        localStorage.removeItem('email')     
        dispatch(addAuthToStorageSuccess())
    }
}