import { takeLatest } from "redux-saga/effects"
import { handleGetUser } from "./Handlers/User"
import { getUser } from "../Ducks/User"

export function* watcherSaga() {
    yield takeLatest(getUser.type, handleGetUser)
}