
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css.folder/neww.css"
import { Link } from "react-router-dom"
import { Layout } from "../pages"





const Neww = () => {
  
 

  const handleSubmit = (event) => {
    
    event.preventDefault();

    var { uname, pass } = document.forms[0];
  }
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
  const [InputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length > 20) {
      return false;
    }
    setInputValue(value);
  };
  const txtFieldState = {
    value: "",
    valid: true,
    typeMismatch: false,
    errMsg: " this is where our error message gets across"
};

  return (
    
    <div className="Auth-form-container" dir="rtl">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label >نام کاربری</label>
            <input
              name="uname"
              type="text"
              value={InputValue}
              className="form-control mt-1"
              onChange={handleChange}


              placeholder="نام کاربری را وارد کنید"
            />

          </div>
          <div className="form-group mt-3">
            <label>رمز عبور</label>
            <input
              name="pass"
              type="password"
              className="form-control mt-1"
              placeholder="رمز عبور را وارد کنید"
            />
          </div>
          <div className="d-grid gap-2 mt-3 text-center" >
            <Link to={"Layout"}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
   )
}
export default Neww;