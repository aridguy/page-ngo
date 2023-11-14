import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>OUR COMPANY
                </h6>
                <p>
                  AGNES ABIONA FOUNDATION is a registered non-governmental
                  non-profit charitable organization based in Nigeria that
                  provide aid for underprivileged girls and young women through
                  development of empowerment program in order to fulfil their
                  God given potential
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">General</h6>
                <p>
                  <a href="#!" className="text-reset">
                    privacy and policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms and conditions
                  </a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Donate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Volunteer
                  </a>
                </p>
              </div>

              <div className="col-md-5 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> 5 Adeyemi Alao
                  <i className="me-3">Street, Community Oke-Ira, Ogba Lagos</i>
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  agnesabionafoundation@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> +2348063306463
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> +2348103221622
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
