import React from "react"
// import RevenueChart from "./revenue-chart"
import { Field, Form, Formik } from "formik";
import 'bootstrap/dist/css/bootstrap.css'
const InputField = ({ id, className, placeholder, name, disabled, formikBag,type }) => {
    const { values, errors } = formikBag;
    return (
        <>
            <Field
                id={id}
                className={className}
                placeholder={placeholder}
                name={name}
                disabled={disabled}
                type={type}
            />
            {errors && errors[name] && (
                <p className="theme-input-error">{errors[name]}</p>

            )}

        </>
    )
}

export default InputField