import { useFormik } from "formik";
import React, { useState } from "react";

const LoginForm = () => {
  const initialValues = {
    name: "",
    number: "",
    password: "",
  };

  const validate = (values) => {
    console.log(values);

    const errors = {};

    if (!values.name.trim().length) errors["name"] = "name field is required";
    if (!values.number.trim().length) errors["number"] = "number field is required";
    if (!values.password.trim().length) errors["password"] = "password field is required";

    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({ initialValues, onSubmit, validate });

  const formOptions = [
    {
      title: "Name",
      name: "name",
      value: formik.values.name,
      onBlur: formik.handleBlur,
      error: formik.errors.name,
      touched: formik.touched.name,
      onChange: formik.handleChange,
    },
    {
      title: "Number",
      name: "number",
      value: formik.values.number,
      onBlur: formik.handleBlur,
      error: formik.errors.number,
      onChange: formik.handleChange,
      touched: formik.touched.number,
    },
    {
      title: "Password",
      name: "password",
      onBlur: formik.handleBlur,
      onChange: formik.handleChange,
      error: formik.errors.password,
      value: formik.values.password,
      touched: formik.touched.password,
    },
  ];

  return (
    <div className="max-w-[600px] w-full mx-auto my-12 px-3">
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <h1>Login form</h1>
        {formOptions.map((option) => (
          <div className="flex flex-col gap-2" key={option.name}>
            <div>{option.title}</div>
            <input name={option.name} value={option.value} onChange={option.onChange} onBlur={option.onBlur} />
            {option.touched && option.error && <div className="text-red-500">{option.error}</div>}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 p-3 rounded-md">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
