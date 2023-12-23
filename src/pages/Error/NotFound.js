import React from "react"
import { string, func } from 'prop-types'
import { Row } from "reactstrap"
const NotFound = ({ title = "Inicio", subTitle, onBack }) => {
    return (
        <>
           NOT FOUND
        </>
    )
}
NotFound.propTypes = {
    text: string.isRequired,
    subTitle: string,
    onBack: func,
}

export default NotFound;