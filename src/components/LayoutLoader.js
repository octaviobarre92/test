import React from "react"
import { bool, string } from 'prop-types'
import LoadingOverlay from "react-loading-overlay";
const LayoutLoader = ({ children, display, text = "Cargando informacion, por favor espere..." }) => {
    return (
        <>
            <LoadingOverlay active={display} spinner text={text}>
                {children}
            </LoadingOverlay>
        </>
    )
}
LayoutLoader.propTypes = {
    display: bool.isRequired,
    text: string.isRequired,
}

export default LayoutLoader;