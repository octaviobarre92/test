import React from "react"
import { Button } from "reactstrap"
import * as Yup from "yup";
import { Form, Formik } from "formik";
import './login.css'
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import LayoutLoader from "../../components/LayoutLoader";
import { actions as actionLogin, selectors as selectorLogin } from "../../store/reducers/login"
const Login = ({ goDashboard, fetching }) => {
    let navigate = useNavigate();
    const initialValues = {
        email: "octavioBarreto",
        password: "123",
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Este campo es requerido").email("El formato del correo no es el correcto"),
        password: Yup.string().required("Este campo es requerido")
    });
    const handleSubmit = (values) => {
        localStorage.setItem("userInfo", values)
        goDashboard(values, navigate("/dashboard"))
    }

    return (
        <React.Fragment>
            <LayoutLoader display={fetching}>
                <section className="section-height">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center section-height">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid" alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <Formik
                                    enableReinitialize
                                    validateOnBlur={false}
                                    validateOnChange={false}
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => handleSubmit(values)}>
                                    {(formikBag) => (
                                        <Form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form3Example3">Correo electrónico</label>
                                                <InputField formikBag={formikBag} id="email" className="form-control form-control-lg"
                                                    placeholder="Enter a valid email address" name="email" />
                                            </div>
                                            <div className="form-outline mb-3">
                                                <label className="form-label" for="form3Example4">Contraseña</label>
                                                <InputField formikBag={formikBag} type="password" id="password" className="form-control form-control-lg"
                                                    placeholder="Enter password" name="password" />
                                            </div>
                                            <div className="login-button-div">
                                                <Button type="submit">Iniciar sesion</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutLoader>

        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    fetching: selectorLogin.getFetching(state),
})
const mapDispatchToProps = (dispatch) => ({
    goDashboard: (values, navigate) => {
        const { email, password } = values
        dispatch(actionLogin.login(email, password, navigate));
        navigate()
    },
    resetLogin: () => {
        actionLogin.resetLogin();
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login)