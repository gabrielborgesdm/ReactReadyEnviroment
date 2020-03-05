/* eslint-disable indent */
import { ADD_CUSTOMER } from "./actions"
const initialState = {
    customers: []
}

export function customersReducer(state = initialState, action) {
    switch(action.type){
        case ADD_CUSTOMER: 
            return { customers: [ ...state.customers, action.customer ]}
        default:
            return state
    }
}

