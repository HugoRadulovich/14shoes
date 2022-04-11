import logo from '../multimedia/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Link } from "react-router-dom";
import CardWidget from './CardWidget';


const Navbar = () => {
    return (

       /*  <!-- Nav --> */
        <nav className="navbar navbar-expand-lg navbar-light nav">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
            <img
                src={logo}
                alt="logo_de_pagina"
                className="encabezadoLogo w-75"
              />
            </Link>
           {/*  <a className="navbar-brand" href="./index.html">
              <img
                src={logo}
                alt="logo_de_pagina"
                className="encabezadoLogo w-75"
              />
            </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <Link to='/genero/6' className='vinculo' >
                <li className="nav-item">
                  <a id="hombre" className="nav-link" aria-current="page" href=""
                    >Hombre</a
                  >
                </li>
                </Link>
            
                <Link to='/genero/9' className='vinculo'>
                <li className="nav-item ">
                  <a id="mujer" className="nav-link" href="">Mujer</a>
                </li>
                </Link>
                
               
    
                <li className="nav-item">
          {/*    <!-- Button trigger modal --> */}
                 <CardWidget></CardWidget>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;