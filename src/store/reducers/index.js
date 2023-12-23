import { combineReducers } from "redux"

import Login from "./login"
import productos from "./products"

const rootReducer = combineReducers({
  // public
  Login,
  productos
})

export default rootReducer
