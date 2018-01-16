import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import loginReducer from './loginReducer'
import authStateReducer from './authStateReducer'
import shipmentReducer from './shipmentReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    form,
    loginReducer,
    authStateReducer,
    shipmentReducer,
    loadingReducer,
})

export default rootReducer