import React from "react"
import { Field } from "formik";
import 'bootstrap/dist/css/bootstrap.css'
const InputField = ({ id, className, placeholder, name, disabled, formikBag, type }) => {
    const { errors } = formikBag;
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