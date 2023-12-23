import { put, takeLatest } from "redux-saga/effects";

import { types } from "../reducers/login"

function* login() {
    yield takeLatest(types.LOGIN_REQUEST, loginAuth);
}

export default login

function* loginAuth({ user, password, navigate }) {
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
}






