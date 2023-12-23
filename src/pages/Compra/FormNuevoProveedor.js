import React from "react"

import { Button, Label, Row, Table } from "reactstrap"
import * as Yup from "yup";
import { Form, Formik } from "formik";
import InputField from "../../components/InputField";
import { connect } from "react-redux";
import { actions as actionProducts, selectors as selectorProducts } from "../../store/reducers/products"

const NuevoProveedor = () => {


    const initialValues = {
        search: "",
    };
    const validationSchema = Yup.object().shape({
        search: Yup.string().required("Este campo es requerido")
    });
    const handleSubmit = (values) => {
        // goDashboard(values, navigate)
    }

    return (
        <React.Fragment>
            <Formik
                enableReinitialize
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}>
                {(formikBag) => (
                    <Form>
                        <br />
                        <Row>
                            <Label>Representante Legal</Label>
                            <InputField formikBag={formikBag} id="search" className="form-control form-control-lg" name="search" />
                        </Row>
                        <Row>
                            <Label>Nombre empresa</Label>
                            <InputField formikBag={formikBag} id="search" className="form-control form-control-lg" name="search" />
                        </Row>
                        <Row>
                            <Label>Direccion</Label>
                            <InputField formikBag={formikBag} id="search" className="form-control form-control-lg" name="search" />
                        </Row>
                        <Row>
                            <Label>Telefono</Label>
                            <InputField formikBag={formikBag} id="search" className="form-control form-control-lg" name="search" />
                        </Row>
                        <Row>
                            <Label>Pais</Label>
                            <InputField formikBag={formikBag} id="search" className="form-control form-control-lg" name="search" />
                        </Row>
                        <br />
                        <Row className="compras-nuevoProveedor__seccion_button">
                            <Button type="submit" className="btn-success compras-nuevoProveedor__agregar">Guardar</Button>
                        </Row>
                    </Form>
                )}
            </Formik>
        </React.Fragment >
    )
}

const mapStateToProps = (state) => ({
    fetching: selectorProducts.getFetching(state),
    dataProducts: selectorProducts.getdataProducts(state),
})
const mapDispatchToProps = (dispatch) => ({
    getLastProducts: () => {
        dispatch(actionProducts.getLastProduct());
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(NuevoProveedor)