import React from "react"
import './layout.css'

const Layout = ({ children }) => {
    return (
        <div className="main-content section-height layout-content">
            {children}
        </div>

    )
}

export default Layout