import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
    key: "root", 
    storage, 
    whilelist: ["cart"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({ reducer: persistedReducer });