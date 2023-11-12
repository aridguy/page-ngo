import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar p-4 navbar-expand-lg navbar-light bg-white shadow-5-strong">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
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
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              About
            </a>
            <a className="nav-link" href="/">
              Gallery
            </a>
            <a href="/" className="nav-link ">
              What We Do
            </a>
            <a href="/" className="nav-link ">
              Contact
            </a>
            <a href="/" className="nav-link ">
             Volunteer
            </a>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
