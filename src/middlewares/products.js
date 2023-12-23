
import { post, del, get, put } from "./api_helper"


export const getLastProduct=()=>{
    return get("https://62a0d7517b9345bcbe40527f.mockapi.io/productos")
}
export const getProveedores=()=>{
    return get("https://62a0d7517b9345bcbe40527f.mockapi.io/proveedores")
}

