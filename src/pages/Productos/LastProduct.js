import React, { useEffect } from "react"

import { Button, Table } from "reactstrap"
import * as Yup from "yup";
import { Form, Formik } from "formik";
import './products.css'
import InputField from "../../components/InputField";
import { connect } from "react-redux";
import LayoutLoader from "../../components/LayoutLoader";
import { actions as actionProducts, selectors as selectorProducts } from "../../store/reducers/products"
import DropdownField from "../../components/DropdownField";
const LastProduct = ({ showCheck, showDelete, productsSelect = undefined, getLastProducts, fetching, showActions, dataProducts, showAdd, showModal = () => { } }) => {
    useEffect(() => {
        getLastProducts()
    }, [])
    const initialValues = {
        search: "",
    };
    const validationSchema = Yup.object().shape({
        search: Yup.string().required("Este campo es requerido")
    });
    const handleSubmit = (values) => {
        // goDashboard(values, navigate)
    }
    const onClickDropDown = (item, data) => {
        showModal(item, data)
    }
    const listDropdownOptions = [
        {
            description: "Ver",
            onClick: onClickDropDown
        },
        {
            description: "Editar",
            onClick: onClickDropDown
        },
        {
            description: "Eliminar",
            onClick: onClickDropDown
        }
    ]
    return (
        <React.Fragment>
            <LayoutLoader display={fetching}>
                <Table>
                    <thead>
                        <tr>
                            <th colSpan={showActions ? 7 : 6}>
                                <Formik
                                    enableReinitialize
                                    validateOnBlur={false}
                                    validateOnChange={false}
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => handleSubmit(values)}>
                                    {(formikBag) => (
                                        <Form>
                                            {productsSelect != undefined ? productsSelect.length > 0 && null : <div class="input-group mb-3">
                                                <InputField formikBag={formikBag} id="search" className="form-control form-control-lg"
                                                    placeholder="Busqueda por coincidencia" name="search" />
                                                <div class="input-group-append">
                                                    <Button type="submit" className="btn-info products-table-button">Buscar</Button>
                                                    {showAdd && <Button type="button" className="btn-success products-table-button" onClick={() => { onClickDropDown(undefined, undefined) }}>Agregar</Button>}
                                                </div>
                                            </div>}

                                        </Form>
                                    )}
                                </Formik>
                            </th>
                            {showActions || showDelete && <th></th>}
                        </tr>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Producto
                            </th>
                            <th>
                                Descripcion
                            </th>
                            <th>
                                Costo
                            </th>
                            <th>
                                Utilidad
                            </th>
                            <th>
                                Valor unitario
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsSelect !== undefined ? productsSelect.length > 0 && productsSelect.map((item) => (
                            <tr>
                                <td>{showCheck && <input type="number" className="form-control" min={1} defaultValue={1} />}</td>
                                <td>{item.nombre}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.costo}</td>
                                <td>{item.utilidad}</td>
                                <td>{item.precio_unit}</td>
                                {showActions && <td><DropdownField textToogle={""} listItems={listDropdownOptions} data={item} /></td>}
                                {showDelete && <td><Button className="btn-danger">Eliminar</Button></td>}
                            </tr>
                        )) : (dataProducts && dataProducts.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.nombre}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.costo}</td>
                                <td>{item.utilidad}</td>
                                <td>{item.precio_unit}</td>
                                {showActions && <td><DropdownField textToogle={""} listItems={listDropdownOptions} data={item} /></td>}
                            </tr>
                        )))}
                        {productsSelect != undefined ? !productsSelect.length && <tr>
                            <td colSpan={7} ><h3>Sin productos a mostrar</h3></td>
                        </tr> : dataProducts && !dataProducts.length && <td colSpan={7}><h3>Sin productos a mostrar</h3></td>}
                    </tbody>
                </Table>

            </LayoutLoader>

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
export default connect(mapStateToProps, mapDispatchToProps)(LastProduct)