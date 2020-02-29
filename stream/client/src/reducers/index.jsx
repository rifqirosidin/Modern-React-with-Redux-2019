import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import { reducer as formReducer } from 'redux-form'
import streamReducers from './streamReducer'

export default combineReducers({
    auth: AuthReducer,
    form: formReducer,
    streams: streamReducers 
})