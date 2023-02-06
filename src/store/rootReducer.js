import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducer'

export const rootReducer = combineReducers({
    user: userReducer, 
    cart: cartReducer
})