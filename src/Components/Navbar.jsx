import React from "react";
import Logo from "../Assets/Logo1.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const gotoAbout = () => {
    navigate("/about");
  };
  // const gotoGallery = () => {
  //   navigate("/gallery");
  // };
  const gotoContact = () => {
    navigate("/contact");
  };
  const gotoVolunteer = () => {
    navigate("/volunteer");
  };
  const gotoHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar p-4 navbar-expand-lg navbar-light bg-white shadow-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img width="40" src={Logo} alt="logo" />
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
            <span
              className="nav-link active cursor"
              aria-current="page"
              onClick={gotoHome}
            >
              Home
            </span>
            <span onClick={gotoAbout} className="nav-link cursor">
              Who we are
            </span>
          
            <span onClick={gotoContact} className="nav-link cursor">
              Contact
            </span>
            <span onClick={gotoVolunteer} className="nav-link cursor">
              Volunteer
            </span>
            <span onClick={gotoVolunteer} className="nav-link cursor">
              Support us
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
