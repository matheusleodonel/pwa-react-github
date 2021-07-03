import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { watcherSaga } from './Saga/index'
import User from './Ducks/User'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    user: User,
})

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga)

export default store