import {React,useState } from "react";
// import { ReactDOM } from "react";
import "../css.folder/formLogin.css";
// import { Input } from "reactstrap";
import { Link,  json,  redirect } from "react-router-dom";
import { Redirect,Route,Navigate} from 'react-router-dom';

export const LoginForm=()=> {
 
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

 
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  // let handleValidation=()=> {
  //   let fields = this.state.fields;
  //   let errors = {};
  //   let formIsValid = true;

  //   //Name
  //   if (!fields["name"]) {
  //     formIsValid = false;
  //     errors["name"] = "Cannot be empty";
  //   }

  //   if (typeof fields["name"] !== "undefined") {
  //     if (!fields["name"].match(/^[a-zA-Z]+$/)) {
  //       formIsValid = false;
  //       errors["name"] = "Only letters";
  //     }
  //   }

  //   //Email
  //   if (!fields["email"]) {
  //     formIsValid = false;
  //     errors["email"] = "Cannot be empty";
  //   }

  //   if (typeof fields["email"] !== "undefined") {
  //     let lastAtPos = fields["email"].lastIndexOf("@");
  //     let lastDotPos = fields["email"].lastIndexOf(".");

  //     if (
  //       !(
  //         lastAtPos < lastDotPos &&
  //         lastAtPos > 0 &&
  //         fields["email"].indexOf("@@") == -1 &&
  //         lastDotPos > 2 &&
  //         fields["email"].length - lastDotPos > 2
  //       )
  //     ) {
  //       formIsValid = false;
  //       errors["email"] = "Email is not valid";
  //     }
  //   }


  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    
    const userData = database.find((user) => user.username === uname.value);
    
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        localStorage.setItem("userData", JSON.stringify(userData))
      }
    } else {
      
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm  = (
    <div className="form"dir="rtl">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>نام کاربری </label>
          <input  type="text" name="uname" />
          {renderErrorMessage("uname")} 
        </div>
        <div className="input-container">
          <label>رمز ورود </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        
          <input type="submit" name="" />
          
        </div> 
      </form>
    </div>
  );

  
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <Navigate to="/Layout/Home" />: renderForm}
        
      </div>
    </div>
  );
}

