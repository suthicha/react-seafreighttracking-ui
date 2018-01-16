// -----------------------------------------------
// author: Suthicha Poonakaow
// date: 12.01.2018
// description: this is a reducer to query shipment.
// email: <isuthicha@gmail.com>
// -----------------------------------------------
import { 
    FETCH_SHIPMENT_JOBS,
    FETCH_SHIPMENT_BOOKING,
    FETCH_SHIPMENT_ERROR,
} from '../actions/actTypes'

// -----------------------------------------------
// Action Handlers
// -----------------------------------------------
const ACTION_HENDLERS = {
    [FETCH_SHIPMENT_JOBS]: (state, {payload}) =>({...state, jobs: payload, error: null}),
    [FETCH_SHIPMENT_BOOKING]: (state, {payload}) =>({...state, booking: Object.assign({}, payload[0]), error: null}),
    [FETCH_SHIPMENT_ERROR]: (state, {payload}) =>({...state, jobs: [], error: Object.assign({}, payload)})
}


// -----------------------------------------------
// Reducer
// -----------------------------------------------
const initialState = {
    jobs: [],
    booking: null,
    error: null,
}

export default function authStorageReducer(state = initialState, action){
    const handler = ACTION_HENDLERS[action.type]
    return handler ? handler(state, action) : state
}

