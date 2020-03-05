import { combineReducers } from 'redux'
import { customersReducer } from './customersReducer'
import { countReducer } from './countReducer'

const rootReducer = combineReducers({
    customers: customersReducer,
    counter: countReducer
})

export default rootReducer;