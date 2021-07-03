import { call, put } from 'redux-saga/effects'
import { requestGetUser } from '../Requests/User'
import { setUser } from '../../Ducks/User'

export function* handleGetUser(action){
    try{
        const response = yield call(requestGetUser, action)
        const {data} = response
        yield put(setUser({...data}))
    }catch(error){
        console.log(error)
    }
}