import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Gallery = () => {
  return (
    <div>
    <Navbar />
    
      <div>
        <section className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="fs-2">Gallery</p>
                <small>
                  Agnes Abiona Foundation is all about giving to help young and
                  elderly womenin the society, see our gallery
                </small>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div
                id="carouselMultiItemExample"
                className="carousel slide carousel-dark text-center"
                data-mdb-ride="carousel"
              >
                <div className="d-flex justify-content-center mb-4">
                  <button
                    className="carousel-control-prev position-relative"
                    type="button"
                    data-mdb-target="#carouselMultiItemExample"
                    data-mdb-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next position-relative"
                    type="button"
                    data-mdb-target="#carouselMultiItemExample"
                    data-mdb-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <div className="carousel-inner py-4">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                              className="card-img-top"
                              alt="Waterfall"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                              className="card-img-top"
                              alt="Sunset Over the Sea"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                              className="card-img-top"
                              alt="Sunset over the Sea"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 col-md-12">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                              className="card-img-top"
                              alt="Fissure in Sandstone"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                              className="card-img-top"
                              alt="Storm Clouds"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                              className="card-img-top"
                              alt="Hot Air Balloons"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                              className="card-img-top"
                              alt="Peaks Against the Starry Sky"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                              className="card-img-top"
                              alt="Bridge Over Water"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                          <div className="card">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                              className="card-img-top"
                              alt="Purbeck Heritage Coast"
                            />
                            <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#!" className="btn btn-primary">
                                Button
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
