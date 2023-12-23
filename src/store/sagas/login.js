import { takeEvery, takeLatest, take, call, fork, put } from "redux-saga/effects";
// import * as servicios from "../middleware/login"
// import * as api from "../api/altaUnica";
import { types } from "../reducers/login"
import { push } from "react-router-redux";

function* login() {
    yield takeLatest(types.LOGIN_REQUEST, loginAuth);
}

export default login

function* loginAuth({ user, password,navigate }) {
    yield new Promise(resolve => setTimeout(resolve, 2000));
    yield put({
        type: types.LOGIN_SUCCESS,
        dataUser: {
            primerNombre: "Octavio",
            segundoNombre: "Andres",
            apellidoPaterno: "Barreto",
            apellidoMaterno: "Zambrano",
            fechaNacimiento: "1990-01-25",
        }
    })
    // yield put(navigate)
}






