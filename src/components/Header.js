import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
const Header = () => {
    let navigate = useNavigate();
    const changeLink = (url) => {
        navigate(`/${url}`)
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div class="container-fluid">
                    <button
                        data-mdb-collapse-init
                        class="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <a class="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="15"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => { changeLink("dashboard") }} href="javascript:void(0)">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => { changeLink("productos") }} href="javascript:void(0)">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => { changeLink("compra") }} href="javascript:void(0)">Compra</a>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center">
                        <Button className="btn-danger" onClick={() => { changeLink("login") }}>Salir</Button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header