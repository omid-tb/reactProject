import { React, useState } from "react";
// import { ReactDOM } from "react";
import "../css.folder/formLogin.css";
// import { Input } from "reactstrap";
import { Link, json, redirect } from "react-router-dom";
import { Redirect, Route, Navigate } from 'react-router-dom';
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import axiosRes from './../services/interceptor4008500';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [modalError, setModalError] = useState(false);
  const toggleError = () => setModalError(!modalError);

  const onSubmit = (event) => {

    var { uname, pass } = document.forms[0];
    let userData = { username: String, password: String };
    userData.username = uname.value;
    userData.password = pass.value;

    axios.post('https://fakestoreapi.com/auth/login', {
      username: uname.value,
      password: pass.value
    })
      .then(function (response) {
        setIsSubmitted(true);
        localStorage.setItem("userData", JSON.stringify(userData))
        localStorage.setItem("token", response.data.token)
      })
      .catch(function (error) {
        setModalError(true)
      });

  };

  const renderForm = (
    <>
      <Modal isOpen={modalError} >
        <ModalHeader dir="rtl" >خطا</ModalHeader >
        <ModalBody style={{ alignSelf: "self-end" }}>
          نام کاربری یا رمز عبور اشتباه می باشد
        </ModalBody>
        <ModalFooter >
          <Button className="px-4" color="secondary" onClick={toggleError}>
            بستن
          </Button>
        </ModalFooter>
      </Modal>

      <div className="form" dir="rtl" style={{ textAlign: 'right' }}>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="input-container" >
            <label>نام کاربری </label>
            <input
              id="uname"
              {...register("uname", {
                required: true,
                validate: {
                  minLength: (v) => v.length >= 5,
                },
              })}
            />
            {errors.uname?.type === "required" && (
              <small >نام کاربری را وارد کنید</small>
            )}

            {errors.uname?.type === "minLength" && (
              <small>نام کاربری نمیتواند کمتر از 4 حرف باشد</small>
            )}
          </div>
          <div className="input-container">
            <label>رمزعبور </label>
            <input
              id="pass"
              {...register("pass", {
                required: true,
                validate: {
                  minLength: (v) => v.length >= 6,
                },
              })}
            />
            {errors.pass?.type === "required" && (
              <small>رمز عبور را وارد کنید</small>
            )}

            {errors.pass?.type === "minLength" && (
              <small>رمز عبور نمیتواند کمتر از 6 حرف باشد</small>
            )}
          </div>
          <div className="button-container">

            <input type="submit" name="" value={"ورود"} />

          </div>
        </form>
      </div>
    </>
  );


  return (
   
    
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <Navigate to="/Layout/Home" /> : renderForm}

      </div>
    </div>
    
  );
}

