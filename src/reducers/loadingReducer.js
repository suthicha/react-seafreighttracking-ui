import { 
    BEGIN_LOADING,
    END_LOADING
} from '../actions/actTypes'

const ACTION_HENDLERS = {
    [BEGIN_LOADING]: state =>({...state, progressLoading: true}),
    [END_LOADING]: state =>({...state, progressLoading: false}),
}

const initialState = {
    progressLoading: false,
}

export default function loadingReducer(state = initialState, action){
    const handler = ACTION_HENDLERS[action.type]
    return handler ? handler(state, action) : state
}