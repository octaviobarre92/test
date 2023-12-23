import { all, fork } from "redux-saga/effects"

//public
import login from "./login"
import productos from "./products"
export default function* rootSaga() {
    yield all([
        fork(login),
        fork(productos),
    ])
}
