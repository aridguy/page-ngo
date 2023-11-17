import React from "react";
import Logo from '../Assets/Logo1.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const gotoAbout =() =>{
    navigate("/about")
  }
  
  return (
    <nav className="navbar p-4 navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img width='40' src={Logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-link active cursor" aria-current="page" href="/">
              Home
            </span>
            <span onClick={gotoAbout} className="nav-link cursor" >
              About
            </span>
            <span className="nav-link cursor" href="/">
              Gallery
            </span>
            
            <span className="nav-link cursor">
              Contact
            </span>
            <span className="nav-link cursor">
             Volunteer
            </span>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
