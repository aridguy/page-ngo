import React from "react";

import Navbar from "../Components/Navbar";
// import Events from "../Components/Events";
import Teams from "../Components/Teams";
// import Contact from "./Contact";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";
import Events from "../Components/Events";
import Socials from "../Components/Socials";
import Training from "../Assets/About/training.png";
import Trainings from "../Assets/About/vocational.png";
import Mentoring from "../Assets/About/help.png";
import Education from "../Assets/About/educations.png";
import Wedo from "../Assets/gallery/gallery/wedo.jpeg";
import { useNavigate } from "react-router-dom";
// import HomeSlider from "../HomeSlider";

// import Gallery from "./Gallery";

const Home = () => {
  const navigate = useNavigate();
  const handleGoToContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      <Navbar />
      {
        <section className="hero-bg place-one">
          <div className="container">
            <div className="row">
              <div className="">
                <h1 className="text-white fw-bolder">
                  AGNES ABIONA ARIYO{" "}
                  <strong className="fw-bolder golden">FOUNDATION</strong>
                </h1>
                <span className="text-white">
                  There is one relation above all Relation of Humanity
                </span>{" "}
                <br />
                <button onClick={handleGoToContact} className="mt-5 bg-golden text-uppercase btn text-white btn-lg ">
                  <span className="text-danger fas fa-heart purple"></span>{" "}
                  &nbsp; Donate
                </button>
              </div>
            </div>
          </div>
        </section>
      }

      {
        <div>
          <section className="place-two bg-light pt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="place-two-contents text-center">
                    <h3>
                      <strong className="purple">
                        Advancing Peace & Global Well-Being of <br /> Women
                        Accross Nigeria
                      </strong>
                    </h3>
                    <p className="black fs-5">
                      AGNES ABIONA FOUNDATION is a registered non-governmental
                      non-profit charitable organization based in Nigeria that
                      provide aid for underprivileged girls and young women
                      through development of empowerment programs in order to
                      fulfil their God given potentials.
                    </p>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  {
                    // row inside another row
                    <div className="row pt-5">
                      <div className="col-md-3 mb-3">
                        <div className="box-1">
                          <div className="text-center mb-4">
                            <span className="fs-1 fas fa-graduation-cap purple"></span>
                          </div>
                          <div className="text-center purple">
                            <strong className="fs-5">
                              Educational Support
                            </strong>
                          </div>
                          <div className="text-center">
                            <small>
                              AAF is guided by the principle that education is
                              basic human right and all children must have
                              access and also believe that it is one of the
                              veritable empowerment tools against poverty
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="box-1">
                          <div className="text-center mb-4">
                            <span className="fs-1 fas fa-network-wired purple"></span>
                          </div>
                          <div className="text-center purple">
                            <strong className="fs-5">
                              Vocational Skill & Training
                            </strong>
                          </div>
                          <div className="text-center">
                            <small>
                              One of the focal points of AAF is to provide
                              support through vocational skills acquisition to
                              indigent girls and young women who are not
                              interested in pursuing formal education to fulfill
                              their potential
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="box-1">
                          <div className="text-center mb-4">
                            <span className="fs-1 fas fa-chalkboard-user purple"></span>
                          </div>
                          <div className="text-center purple">
                            <strong className="fs-5">Mentoring</strong>
                          </div>
                          <div className="text-center">
                            <small>
                              As girls navigate adolescent stage, they face
                              challenge of moving through physical,
                              psychological, sexual, and emotional development
                              with a healthy sense of self intact.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="box-1">
                          <div className="text-center mb-4">
                            <span className="fs-1 fas fa-users-gear purple"></span>
                          </div>
                          <div className="text-center purple">
                            <strong className="fs-5">
                              Leadership Training
                            </strong>
                          </div>
                          <div className="text-center">
                            <small className="">
                              The leadership training for girls and young women
                              of this foundation will empower necessary skills
                              in leadership quality needed for them to actively
                              participate in the leadership role.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </section>
        </div>
      }

      {
        <div>
          <Events />
        </div>
      }

      {
        <div className="mt-5 pt-5 bg-light pb-5 ">
          <section className="bg-grey wedo mt-5">
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-12">
                  <p className="fw-bold fs-2">What We Do</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <img src={Wedo} alt="what we do" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="abt-cards">
                        <div className="d-flex gap-2">
                          <img width="20%" src={Mentoring} alt="vision" />{" "}
                          <p className="fs-4 black fw-bolder">Mentoring</p>
                        </div>
                        <div className="mt-3">
                          <i>
                            {" "}
                            As girls navigate adolescent stage, they face
                            challenge of moving through physical, psychological,
                            sexual, and emotional development with a healthy
                            sense of self intact
                          </i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="abt-cards">
                        <div className="d-flex gap-2">
                          <img width="20%" src={Training} alt="vision" />{" "}
                          <p className="fs-4 black fw-bolder">
                            Leadership Training
                          </p>
                        </div>
                        <div className="mt-3">
                          <i>
                            {" "}
                            AAF recongnises the importance of providing girls
                            and young women skills and confidence to become
                            leaders in their societies
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <div className="abt-cards">
                        <div className="d-flex gap-2">
                          <img width="20%" src={Education} alt="vision" />{" "}
                          <p className="fs-4 black fw-bolder">
                            Educational Support
                          </p>
                        </div>
                        <div className="mt-3">
                          <i>
                            {" "}
                            AAF is guided by the principle that education is
                            basic human right and all children must have access
                            and also believe that it is one of the veritable
                            empowerment tools against poverty.
                          </i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="abt-cards">
                        <div className="d-flex gap-2">
                          <img width="20%" src={Trainings} alt="vision" />{" "}
                          <p className="fs-4 black fw-bolder">Training</p>
                        </div>
                        <div className="mt-3">
                          <i>
                            {" "}
                            One of the focal points of AAF is to provide support
                            through vocational skills acquisition to indigent
                            girls and young women who are not interested in
                            pursuing formal education
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      }

      {
        <div>
          <Teams />
        </div>
      }

      <section className=" pb-5 extrass">
        <div className="container">
          <div className="row border-row">
            <div className="col-md-3 border-left">
              <div>
                <div>
                  <small className="text-white fs-3 fw-bold">
                    Volunteer With Us
                  </small>
                </div>
                <div>
                  <span className="text-white">
                    We rely on our volunteers and interns to help make our goals
                    a reality.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 border-left">
              <div>
                <div>
                  <small className="text-white fs-3 fw-bold ">
                    Corporate Support
                  </small>
                </div>
                <div>
                  <span className="text-white">
                    Our programs depend on independent support and generosity of
                    Corporations.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 border-left">
              <div>
                <div>
                  <small className="text-white fs-3 fw-bold">
                    Donate Products
                  </small>
                </div>
                <div>
                  <span className="text-white">
                    We seek product donations from healthcare institutions,
                    individuals and corporations.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 border-left">
              <div>
                <div>
                  <small className="text-white fs-3 fw-bold">
                    Fundraise For Us
                  </small>
                </div>
                <div>
                  <span className="text-white">
                    You can fundraise for all the programs or any of the
                    programs that interest you.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        <div>
          <Contacts />
        </div>
      }
      {
        <div>
          <Footer />
        </div>
      }

      <Socials />
    </div>
  );
};

export default Home;
