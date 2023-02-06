import { createAction } from '../../utils/createAction'
import { CART_ACTION_TYPES } from '../types/cartTypes'


const chekAddProduct = (cartItems, itemToAdd) => {
    const already = cartItems.find(x => x.id === itemToAdd.id);
    if(already) return cartItems.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item);
   
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}
 const chekRemoveProduct = (cartItems = [], itemToRemove) => {
    const amount = cartItems.find(x => x.id ===  itemToRemove.id).quantity;
    if(amount > 1) return cartItems.map(item => item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item);
   
    return cartItems.filter(item => item.id !== itemToRemove.id);
}

const preCustomProduct = (items, itemId, size, color) => {
    return items.map(item => item.id === itemId ? { ...item, size, color } :  item );
}


export const addProduct = (cartItems, item) => {
    const newCart = chekAddProduct(cartItems, item);
    return createAction(CART_ACTION_TYPES.SET_CURRENT_ITEMS, newCart)
}


export const removeProduct = (cartItems, item) => {
    const newCart = chekRemoveProduct(cartItems, item);
    return createAction(CART_ACTION_TYPES.SET_CURRENT_ITEMS, newCart)
}

export const customProduct = (items, itemId, size, color) => {
    const newCart = preCustomProduct(items, itemId, size, color);
    return createAction(CART_ACTION_TYPES.SET_CURRENT_ITEMS, newCart)
}


export const setShowCart = boolean => createAction(CART_ACTION_TYPES.SET_SHOW_CART, boolean)


export const setCurrentProduct = product => createAction(CART_ACTION_TYPES.SET_CURRENT_PRODUCT, product);


export const setTotal = price => createAction(CART_ACTION_TYPES.SET_TOTAL, price)


