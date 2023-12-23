import React from "react"
import { string, func } from 'prop-types'
import { Row } from "reactstrap"
const Breadcrumb = ({ title = "Inicio", subTitle, onBack }) => {
    return (
        <>
            <Row>
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="page-title mb-0 font-size-18">{onBack && <i className="fas fa-arrow-left" style={{ cursor: "pointer" }} onClick={() => { onBack() }} ></i>} {" "} {title}</h4>
                        {subTitle && <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item active">{subTitle}</li>
                            </ol>
                        </div>}
                    </div>
                </div>
            </Row>
        </>
    )
}
Breadcrumb.propTypes = {
    text: string.isRequired,
    subTitle: string,
    onBack: func,
}

export default Breadcrumb;