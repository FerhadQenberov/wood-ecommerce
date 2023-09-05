import React, { useState } from "react";
import Form from "./Form";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";
import axios from "axios";


const Register = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    confirmPassword: "",
    password: "",
    username:""
  });
  

  const fetchRequest = async  () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/register",
        formData
      );
      
    } catch (error) {
     
    }
  };

  const onSubmit = async (values, actions) => {
    setFormData({
      email: values.email,
      confirmPassword: values.confirmPassword,
      password: values.password,
      username:values.username

      
    });
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();

     fetchRequest();
  };

  const { values, errors, isSubmitting, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        username:" ",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  const inputStyle = errors.email ? { borderColor: "#fc8181" } : {};

  return (
    <>
      <div className="register-page d-flex align-items-center ">
        <div className="row con-register d-flex align-items-center">
          <div className="col-12 col-md-6 col-lg-6">
            {show ? (
              <div className="login">
                <h4>Login</h4>
                <Form show={show} />
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <h4>Register</h4>
                <label>Username </label>

                <input  id="input"   style={inputStyle}  type="username"   value={values.username}   name="username"  onChange={handleChange} />
                   <label>Email </label>

                 <input id="input"   style={inputStyle}  type="email"   value={values.email}   name="email"
                  onChange={handleChange}
                />

                {errors.email && <p className="text-error">{errors.email}</p>}

                <label>Password *</label>

                <input
                  className={errors.password ? "input-error" : ""}
                  type="password"
                  name="password"
                  id="input"
                  value={values.password}
                  onChange={handleChange}
                />

                {errors.password && (
                  <p className="text-error">{errors.password}</p>
                )}

                <label> Confirm Password *</label>
                <input
                  className="input"
                  type="password"
                  name="confirmPassword"
                  id="input"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="text-error">{errors.confirmPassword}</p>
                )}

                <button type="submit" disabled={isSubmitting}>
                  Register
                </button>
                <div className="checkbox">
                  <input className="radio" type="radio" />
                  <span>Remember me?</span>

                  <NavLink className="link">Last your password</NavLink>
                </div>
              </form>
            )}
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="register-info">
              <h2>{show ? "Login" : "Register"}</h2>
              <p>
                Registering for this site allows you to access your order status
                and history. Just fill in the fields below, and we'll get a new
                account set up for you in no time. We will only ask you for
                information necessary to make the purchase process faster and
                easier.
              </p>
              <button
                type="submit"
                onClick={() => setShow(!show)}
                className="btn btn-primary"
              >
                {show ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
