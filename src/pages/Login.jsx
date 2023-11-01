import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { LoginForm } from '../components/formLogin';
import Neww from '../components/neww';
import Test from '../components/test';


const Login = () => {
  
  return (
   
          <>
            <LoginForm />
            <Outlet />
          </>
       
  )
}

export default Login