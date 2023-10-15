import React, { createElement } from 'react'
import { Outlet, Link } from "react-router-dom";
import NavbarHome from '../components/Navbar';
import Neww from '../components/neww';

import Example from '../components/Navbar';
import Navv from '../components/nav';
import Slider  from '../components/slider';

const Home = () => {
  return (

        <>
          
    <Slider/>
          <Outlet />
        </>
      )
}

export default Home;