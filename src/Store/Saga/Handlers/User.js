import { call, put } from 'redux-saga/effects'
import { requestGetUser } from '../Requests/User'
import { setUser } from '../../Ducks/User'

export function* handleGetUser(action){
    try{
        const response = yield call(requestGetUser, action) // Chamando o request da API com o login digitado pelo usuário
        const {data} = response
        yield put(setUser({...data})) // Objeto 'user' (definido em Ducks/User.js) recebe os dados fornecidos pela API do GitHub
    }catch(error){
        console.log(error)
    }
}