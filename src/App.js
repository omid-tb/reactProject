import "bootstrap/dist/css/bootstrap.min.css";
import './css.folder/App.css';
// import { Formlogin } from "./components"
// import NavbarHome from "./components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Login,Layout,AddPost,Contacts,NoPage,Profile,Home} from "./pages/index";

// import Layout from "./pages/Layout";
// import Login from "./pages/Login";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header" dir='rtl'>
    //     <NavbarHome/>
    //   </header>
    //   <Formlogin />
    // </div>

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Layout" element={<Layout />}> 
        <Route path="/Layout/Home" element={<Home />} />
        <Route path="/Layout/AddPost" element={<AddPost />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="Profile" element={<Profile />} />
       </Route>
       <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
