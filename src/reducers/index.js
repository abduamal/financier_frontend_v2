import { combineReducers } from 'redux'
import authReducer from './auth'
import accountReducer from './accountReducer'

export default combineReducers({
  auth: authReducer,
  accounts: accountReducer
})
