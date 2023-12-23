import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as Yup from "yup";
import { Form, Formik } from "formik";
import InputField from '../../components/InputField';
function ModalProductos({ data, modal, setModal, ...args }) {
    const toggle = () => setModal(!modal);
    const initialValues = {
        nameProduct: data ? data.data.nombre : "",
        description: data ? data.data.descripcion : "",
        valorUnitario: data ? data.data.precio_unit : "",
        costo: data ? data.data.costo : "",
        utilidad: data ? data.data.utilidad : "",
    };
    const validationSchema = Yup.object().shape({
        nameProduct: Yup.string().required("Este campo es requerido"),
        description: Yup.string().required("Este campo es requerido"),
        valorUnitario: Yup.string().required("Este campo es requerido"),
        costo: Yup.string().required("Este campo es requerido"),
        utilidad: Yup.string().required("Este campo es requerido"),
    });
    const handleSubmit = (values) => {
        toggle()
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} {...args} size="md">
                <ModalHeader toggle={toggle}>Datos del producto</ModalHeader>
                <Formik
                    enableReinitialize
                    validateOnBlur={false}
                    validateOnChange={false}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleSubmit(values)}>
                    {(formikBag) => (
                        <Form>
                            <ModalBody>
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form3Example3">Nombre de producto</label>
                                    <InputField formikBag={formikBag} id="nameProduct" className="form-control form-control-lg"
                                        placeholder="Ingrese un nombre" name="nameProduct" />
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label" for="form3Example4">Descripcion</label>
                                    <InputField formikBag={formikBag} type="text" id="description" className="form-control form-control-lg"
                                        placeholder="" name="description" />
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label" for="form3Example4">Costo</label>
                                    <InputField formikBag={formikBag} type="text" id="costo" className="form-control form-control-lg"
                                        placeholder="" name="costo" />
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label" for="form3Example4">Uilidad</label>
                                    <InputField formikBag={formikBag} type="text" id="utilidad" className="form-control form-control-lg"
                                        placeholder="" name="utilidad" />
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label" for="form3Example4">Valor unitario</label>
                                    <InputField formikBag={formikBag} type="text" id="valorUnitario" className="form-control form-control-lg"
                                        placeholder="" name="valorUnitario" />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>
                                    Cancelar
                                </Button>{' '}
                                <Button type='submit' color="secondary">
                                    Guardar
                                </Button>
                            </ModalFooter>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
}

export default ModalProductos;