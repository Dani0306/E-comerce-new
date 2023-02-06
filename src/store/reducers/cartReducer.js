import { CART_ACTION_TYPES } from '../types/cartTypes'

const CART_INITIAL_STATE = {
    items: [], 
    showCart: false, 
    currentProduct: null, 
    total: 0
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CURRENT_ITEMS: 
            return { ...state, items: payload }
        case CART_ACTION_TYPES.SET_SHOW_CART: 
            return { ...state, showCart: payload }
        case CART_ACTION_TYPES.SET_CURRENT_PRODUCT: 
            return { ...state, currentProduct: payload } 
        case CART_ACTION_TYPES.SET_TOTAL: 
            return { ...state, total: payload }
        default: 
            return state;
    }


}