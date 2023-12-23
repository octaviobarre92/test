import { takeLatest, call, put } from "redux-saga/effects";
import * as servicios from "../../middlewares/products"
import { types } from "../reducers/products"

function* productos() {
    yield takeLatest(types.PRODUCTS_REQUEST, getLastProduct);
    yield takeLatest(types.PROVEEDORES_REQUEST, getProveedores);
}

export default productos

function* getLastProduct() {
    yield new Promise(resolve => setTimeout(resolve, 2000));
    const response = yield call(servicios.getLastProduct);
    let dataProducts = [];
    for (let i = 0; i < (response.length > 10 ? response.length : response.length); i++) {
        dataProducts.push(response[i])
    }
    yield put({
        type: types.PRODUCTS_SUCCESS,
        dataProducts
    })
}
function* getProveedores() {
    yield new Promise(resolve => setTimeout(resolve, 2000));
    const response = yield call(servicios.getProveedores);
    let dataProveedores = [];
    for (let i = 0; i < (response.length > 10 ? response.length : response.length); i++) {
        dataProveedores.push(response[i])
    }
    yield put({
        type: types.PROVEEDORES_SUCCESS,
        dataProveedores
    })
}






