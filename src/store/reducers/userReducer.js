import { USER_ACTION_TYPES } from '../types/userTypes'

const USER_INITIAL_STATE = {
    user: null,
    showUserMenu: false
}

export const userReducer  = (state = USER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
            return { ...state, user: payload }
        case USER_ACTION_TYPES.SET_SHOW_MENU: 
            return { ...state, showUserMenu: payload }
        default: 
            return state;
    }

}