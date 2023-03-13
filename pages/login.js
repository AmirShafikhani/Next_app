import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    passwordConfirm: "",
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const updateData = (e) => {
    e.preventDefault();
    setInitialValues({
      name: "test",
      email: "test@gmail.com",
      gender: "0",
      password: "fasdfsdfdff",
      passwordConfirm: "fasdfsdfdff",
    });
  };

  const validationSchema = Yup.object({
    name: Yup.string("name must be a string")
      .required("name is a required property")
      .min(6, "name must be at least contains 6 characters")

      .max(30, "name must be at most 30 characters"),
    email: Yup.string("email must be a string").email("please enter a valid email").required("email is a required property"),
    password: Yup.string("name must be a string").required("password is a required property"),
    passwordConfirm: Yup.string("passwordConfirm must be a string")
      .required("passwordConfirm must be a string")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    gender: Yup.string().required("gender is a required property"),
  });

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const formOptions = [
    // Using getFieldProps to pass "error", "onChange", "touched"
    {
      title: "Name",
      name: "name",
      error: formik.errors.name,
      touched: formik.touched.name,
      ...formik.getFieldProps("name"),
    },
    // Passing "error", "onChange", "touched" manually
    {
      title: "email",
      name: "email",
      value: formik.values.email,
      onBlur: formik.handleBlur,
      error: formik.errors.email,
      onChange: formik.handleChange,
      touched: formik.touched.email,
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
    {
      title: "Password Confirmation",
      name: "passwordConfirm",
      onBlur: formik.handleBlur,
      onChange: formik.handleChange,
      error: formik.errors.passwordConfirm,
      value: formik.values.passwordConfirm,
      touched: formik.touched.passwordConfirm,
    },
  ];

  return (
    <div className="max-w-[600px] w-full mx-auto my-12 px-3">
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
        <h1>Login form</h1>
        {formOptions.map((option) => (
          <div className="flex flex-col gap-2" key={option.name}>
            <label htmlFor={option.name}>{option.title}</label>
            <input id={option.name} name={option.name} value={option.value} onChange={option.onChange} onBlur={option.onBlur} />
            {option.touched && option.error && <div className="text-red-500">{option.error}</div>}
          </div>
        ))}
        <div className="flex gap-5">
          <div>
            <label htmlFor="0">Male</label>
            <input
              id="0"
              type="radio"
              value="0"
              name="gender"
              onChange={formik.handleChange}
              checked={formik.values.gender === "0"}
            />
          </div>
          <div>
            <label htmlFor="1">Female</label>
            <input
              id="1"
              type="radio"
              value="1"
              name="gender"
              onChange={formik.handleChange}
              checked={formik.values.gender === "1"}
            />
          </div>
        </div>
        <button className={`${!formik.isValid && "opacity-50"} bg-blue-500 p-3 rounded-md`} onClick={updateData}>
          load data
        </button>
        <button
          type="submit"
          disabled={!formik.isValid}
          className={`${!formik.isValid && "opacity-50"} bg-blue-500 p-3 rounded-md`}
        >
          Submit form
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
