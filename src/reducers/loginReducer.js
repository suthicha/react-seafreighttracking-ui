// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 02.01.2018
// description: this is a reducer for login process.
// email: <isuthicha@gmail.com>
// -----------------------------------------------
import _ from 'lodash'
import axios from 'axios'
import { URL_API, DELAY } from '../settings'

export const AUTH_LOGGING_IN = 'AUTH_LOGGING_IN'
export const AUTH_LOGGED_IN = 'AUTH_LOGGED_IN'
export const AUTH_LOGGED_OUT = 'AUTH_LOGGED_OUT'

// -----------------------------------------------
// Actions
// -----------------------------------------------
export const fetchAuth = (username, password) => (dispatch) => {
    dispatch({type: AUTH_LOGGING_IN})

    _.delay(()=>{

    }, DELAY)

    dispatch({type: AUTH_LOGGED_IN, data: {}})
}


// -----------------------------------------------
// Action Handlers
// -----------------------------------------------
const ACTION_HENDLERS = {
    [AUTH_LOGGING_IN]: state =>({...state, isLoading: true}),
    [AUTH_LOGGED_IN]: (state, { data }) =>({...state, isLoading: false, data}),
    [AUTH_LOGGED_OUT]: state => ({...state, isLoading: false })
}


// -----------------------------------------------
// Reducer
// -----------------------------------------------
const initialState = {
    isLoading: false,
    data: {},
}

export default function loginReducer(state = initialState, action){
    const handler = ACTION_HENDLERS[action.type]
    return handler ? handler(state, action) : state
}

