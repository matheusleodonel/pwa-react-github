import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { watcherSaga } from './Saga/index'
import User from './Ducks/User'

const sagaMiddleware = createSagaMiddleware()

/* Lista de reducers (nesse caso, utilizei apenas o reducer com os atributos do usuário digitado no login) */
const reducer = combineReducers({
    user: User,
})

// Configurando a store utilizando o middleware
const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(watcherSaga)

export default store