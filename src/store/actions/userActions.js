import { createAction } from '../../utils/createAction'
import { USER_ACTION_TYPES } from '../types/userTypes'


export const login = user => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const setShowMenu = boolean => createAction(USER_ACTION_TYPES.SET_SHOW_MENU, boolean)