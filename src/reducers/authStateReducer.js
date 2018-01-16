// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 12.01.2018
// description: this is a reducer for keep auth to storage.
// email: <isuthicha@gmail.com>
// -----------------------------------------------
import { 
    ADD_AUTH_STORAGE,
    REMOVE_AUTH_STORAGE,
} from '../actions/actTypes'

// -----------------------------------------------
// Action Handlers
// -----------------------------------------------
const ACTION_HENDLERS = {
    [ADD_AUTH_STORAGE]: state =>({...state, isAuthen: true}),
    [REMOVE_AUTH_STORAGE]: state => ({...state, isAuthen: false })
}


// -----------------------------------------------
// Reducer
// -----------------------------------------------
const initialState = {
    isAuthen: false,
}

export default function authStorageReducer(state = initialState, action){
    const handler = ACTION_HENDLERS[action.type]
    return handler ? handler(state, action) : state
}

