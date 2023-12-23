
import { post, del, get, put } from "../../helpers/api_helper"


export const getClient=()=>{
    return get("https://64f9b336-0f3f-403f-b990-f05296fc1f6b.mock.pstmn.io/consultaDeCliente?kfc=1234567")
}
export const getCatalog=(code)=>{
    return get("https://64f9b336-0f3f-403f-b990-f05296fc1f6b.mock.pstmn.io/consultaCatalogo?idCatalogo="+code)
}
export const createUser=({firstName, lastName})=>{
    // return axios.post("/users",{
    //     firstName, lastName
    // })
}
export const deleteUser=(userId)=>{
    // return axios.delete("/users/"+userId)
}