import React from "react"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Productos from "./pages/Productos/Productos"
import Compra from "./pages/Compra/Compra"

const userRoutes = [
  { path: "/dashboard", component: <Home /> },
  { path: '/login', component: <Login /> },
  { path: '/productos', component: <Productos /> },
  { path: '/compra', component: <Compra /> },
]

export { userRoutes }