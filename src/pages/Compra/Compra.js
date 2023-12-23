import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Layout from "../../components/Layout";
import { Button, Card, Col, Form, FormGroup, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from "reactstrap";
import './compra.css'
import LastProduct from "../Productos/LastProduct";
import Header from "../../components/Header";
import SelectProduct from "./ProductsFilter";
import SelectProveedor from "./ProveedoresFilter";
import useToggle from "../../hooks/useToogle";
import NuevoProveedor from "./FormNuevoProveedor";

const Compra = () => {
    const [productsSelect, setProductsSelect] = useState([])
    const [value, toggleValue] = useToggle(false)
    return (
        <>
            {<Header />}
            <Layout>
                <Card className="p-5">
                    <Form>
                        <Row className="float-end p-5">
                            <Col md={12} >
                                <Button
                                    color="primary"
                                    onClick={toggleValue}
                                >
                                    Guardar Proveedor
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fechaCompra">
                                        Fecha
                                    </Label>
                                    <Input
                                        id="fechaCompra"
                                        name="fechaCompra"
                                        type="date"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <Label for="nombreProveedor">
                                    Proveedor
                                </Label>
                                <SelectProveedor />

                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="motivoCompra">
                                Motivo de compra
                            </Label>
                            <Input
                                id="motivoCompra"
                                name="motivoCompra"
                                placeholder="1234 Main St"
                            />
                        </FormGroup>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="paisCompra">
                                        Pais
                                    </Label>
                                    <Input
                                        id="paisCompra"
                                        name="paisCompra"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="ciudadCompra">
                                        Ciudad
                                    </Label>
                                    <Input
                                        id="ciudadCompra"
                                        name="ciudadCompra"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="postalCode">
                                        Codigo Postal
                                    </Label>
                                    <Input
                                        id="postalCode"
                                        name="postalCode"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Card>
                <br />
                <Card className="p-5">
                    <Row>
                        <Col md={3}>
                            <Label>Seleccione un producto a comprar</Label>
                            <SelectProduct productsSelect={productsSelect} setProductsSelect={setProductsSelect} />
                        </Col>
                    </Row>
                    <Row>
                        <LastProduct productsSelect={productsSelect} showDelete showCheck />
                    </Row>
                </Card>

            </Layout>
            <Offcanvas toggle={toggleValue} isOpen={value}>
                <OffcanvasHeader toggle={toggleValue}>
                    Agregar  nuevo proveedor
                </OffcanvasHeader>
                <OffcanvasBody>
                    <strong>
                        Ingresa los datos del proveedor por favor...
                    </strong>
                    <NuevoProveedor />
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}

export default Compra