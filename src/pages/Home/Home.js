import React from "react"
// import RevenueChart from "./revenue-chart"
import 'bootstrap/dist/css/bootstrap.css'
import Layout from "../../components/Layout";
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Row } from "reactstrap";
import './home.css'
import LastProduct from "../Productos/LastProduct";
import Header from "../../components/Header";

const Home = ({ }) => {
    return (
        <>
            {<Header />}

            <Layout>
                <Card inverse>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/900/270?grayscale"
                        height="300"
                        width="100%"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">
                            Inicio
                        </CardTitle>
                        <CardText>
                            Se visualizan los ultimos productos agregados y otros detalles
                        </CardText>
                    </CardImgOverlay>
                </Card>
                <br />
                <Row>
                    <Col sm="12">
                        <Card body>
                            <CardTitle tag="h5">
                                Ultimos productos registrado
                            </CardTitle>
                            <LastProduct  showAdd={false} />

                        </Card>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export default Home