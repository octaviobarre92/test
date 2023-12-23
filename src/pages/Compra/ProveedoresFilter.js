import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { connect } from "react-redux";
import { actions as actionProducts, selectors as selectorProducts } from "../../store/reducers/products"
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const SelectProveedor = ({ getProveedores, dataProveedores }) => {
    const [productsItems, setproductsItems] = useState([]);
    useEffect(() => {
        getProveedores()
    }, [])
    useEffect(() => {
        if (dataProveedores && dataProveedores.length) {
            const newProduct = dataProveedores.map((item) => {
                return {
                    value: item.idProveedor,
                    label: item.nombreProveedor,
                    product: item
                }
            })
            setproductsItems(newProduct)
        }
    }, [dataProveedores])
    const setProductsOnchange = (value) => {
        // let productsSelectNow=[value.product,...productsSelect];
        // setProductsSelect(productsSelectNow)
    }
    return (
        <div className="App">
            <Select
                defaultValue={null}
                onChange={(e) => { setProductsOnchange(e); }}
                placeholder="Buscar proveedor o agregue uno nuevo"
                options={productsItems}
            />
        </div>
    );
}
const mapStateToProps = (state) => ({
    fetching: selectorProducts.getFetching(state),
    dataProveedores: selectorProducts.getdataProveedores(state),
})
const mapDispatchToProps = (dispatch) => ({
    getProveedores: () => {
        dispatch(actionProducts.getProveedores());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectProveedor)