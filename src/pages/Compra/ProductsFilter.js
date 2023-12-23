import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { connect } from "react-redux";
import { actions as actionProducts, selectors as selectorProducts } from "../../store/reducers/products"
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const SelectProduct = ({ getLastProducts, dataProducts,productsSelect, setProductsSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [productsItems, setproductsItems] = useState([]);
    useEffect(() => {
        getLastProducts()
    }, [])
    useEffect(() => {
        if (dataProducts && dataProducts.length) {
            const newProduct=dataProducts.map((item) => {
                return {
                    value: item.nombre,
                    label: item.nombre,
                    product:item
                }
            })
            setproductsItems(newProduct)
        }
    }, [dataProducts])
    const setProductsOnchange=(value)=>{
        let productsSelectNow=[value.product,...productsSelect];
        setProductsSelect(productsSelectNow)
    }
    return (
        <div className="App">
            <Select
                defaultValue={selectedOption}
                onChange={(e)=>{setProductsOnchange(e);}}
                placeholder="Buscar producto"
                options={productsItems}
            />
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectProduct)