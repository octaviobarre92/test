export const types = {
    PRODUCTS_REQUEST: "PRODUCTS/PRODUCTS_REQUEST",
    PRODUCTS_SUCCESS: "PRODUCTS/PRODUCTS_SUCCESS",
    PRODUCTS_FAILURE: "PRODUCTS/PRODUCTS_FAILURE",

    PROVEEDORES_REQUEST: "PROVEEDORES/PROVEEDORES_REQUEST",
    PROVEEDORES_SUCCESS: "PROVEEDORES/PROVEEDORES_SUCCESS",
    PROVEEDORES_FAILURE: "PROVEEDORES/PROVEEDORES_FAILURE",

    RESTABLECER_STORE: "products/RESTABLECER_STORE",
}


export const INITIAL_STATE = {
    fetching: false,
    hasLogged: false,
    dataProducts: [],
    dataProveedores: [],
}

export default (state = INITIAL_STATE, action = {}) => {
    const {
        fetching,
        dataProducts,
        dataProveedores,
        ...rest
    } = action;
    switch (action.type) {
        case types.RESTABLECER_STORE:
            return {
                INITIAL_STATE,
                tipo: "RESTABLECER_STORE"
            };
        case types.PRODUCTS_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.PRODUCTS_FAILURE:
            return {
                ...state,
                fetching: false,
            };
        case types.PRODUCTS_SUCCESS:
            return {
                ...state,
                fetching: false,
                dataProducts
            }
        case types.PROVEEDORES_REQUEST:
            return {
                ...state,
                fetching: true,
            };
        case types.PROVEEDORES_FAILURE:
            return {
                ...state,
                fetching: false,
            };
        case types.PROVEEDORES_SUCCESS:
            return {
                ...state,
                fetching: false,
                dataProveedores
            }
        default:
            return state;
    }
}
export const actions = {
    getLastProduct: () => ({
        type: types.PRODUCTS_REQUEST
    }),
    getProveedores: () => ({
        type: types.PROVEEDORES_REQUEST
    }),
    resetProducts: () => ({
        type: types.RESTABLECER_STORE
    })
}

export const selectors = {
    getdataProveedores: ({ productos }) => productos.dataProveedores,
    getdataProducts: ({ productos }) => productos.dataProducts,
    getFetching: ({ productos }) => productos.fetching,
}
