// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 02.01.2018
// description: this is a reducer for login process.
// email: <isuthicha@gmail.com>
// -----------------------------------------------
import { 
    AUTH_LOGGING_IN, 
    AUTH_LOGGED_IN, 
    AUTH_LOGGED_OUT 
} from '../actions/actTypes'

// -----------------------------------------------
// Action Handlers
// -----------------------------------------------
const ACTION_HENDLERS = {
    [AUTH_LOGGING_IN]: state =>({...state, isLoading: true}),
    [AUTH_LOGGED_IN]: (state, { payload }) =>({...state, isLoading: false, data: Object.assign({}, payload)}),
    [AUTH_LOGGED_OUT]: state => ({...state, isLoading: false })
}


// -----------------------------------------------
// Reducer
// -----------------------------------------------
const initialState = {
    isLoading: false,
    data: null,
}

export default function loginReducer(state = initialState, action){
    const handler = ACTION_HENDLERS[action.type]
    return handler ? handler(state, action) : state
}

