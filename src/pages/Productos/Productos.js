import React, { useEffect, useState } from "react"
import { Button, Card, Table } from "reactstrap"
import './products.css'
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actions as actionProducts, selectors as selectorProducts } from "../../store/reducers/products"
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import LastProduct from "./LastProduct";
import ModalProductos from "./ModalProductos";
const Products = ({ getLastProducts, fetching }) => {
    let navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [data, setData] = useState(null);
    const showModal = (item, data) => {
        setModal(true)
        setData(item ? { item: item, data: data } : null)
    }
    return (
        <React.Fragment>
            {<Header />}
            <Layout>
                <Card className="p-5">
                    <LastProduct showAdd showActions showModal={showModal} />
                </Card>
            </Layout>
            <ModalProductos data={data} setData={setData} modal={modal} setModal={setModal} />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    fetching: selectorProducts.getFetching(state),
    dataProducts: selectorProducts.getdataProducts(state),
})
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Products)