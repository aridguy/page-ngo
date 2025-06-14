import React from "react";
import Navbar from "../Components/Navbar";
import "../App.css";
import Footer from "../Components/Footer";

const Volunteer = () => {
  return (
    <div>
      <Navbar />
      {
        <section className="hero-volunteer place-one">
          <div className="container">
            <div className="row">
              <div className="">
                <h2 className="text-white ">
                  BECOME A{" "}
                  <strong className="fw-bolder golden">VOLUNTEER</strong>
                </h2>
                <span className="text-white">
                  We need some informations for us to verify you as a volunteer
                  with us.
                </span>{" "}
                <br />
              </div>
            </div>
          </div>
        </section>
      }

      <section className="vol-sec mt-5">
        <div className="container">
          <div className="row">
            <div>
              <span className="golden bolder">Be a Volunteer</span>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mt-2 mb-3">
                  <input
                    type="text"
                    name="full name"
                    className="form-control fmc"
                    placeholder="full name"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <input
                    type="address"
                    name="address"
                    className="form-control fmc"
                    placeholder="address"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <input
                    type="text"
                    name="full name"
                    className="form-control fmc"
                    placeholder="country"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <input
                    type="number"
                    name="full name"
                    className="form-control fmc"
                    placeholder="Tell phone"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <input
                    type="email"
                    name="full name"
                    className="form-control fmc"
                    placeholder="email address"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <input
                    type="date"
                    name="address"
                    className="form-control fmc"
                    placeholder="date of birth"
                  />
                </div>
                <div>
                  <small>
                    If you are involved with us as a volunteer and an <br />{" "}
                    emergency arises, whom should we contact?
                  </small>
                </div>
                <div className="mt-2 mb-3">
                  <input
                    type="text"
                    name="full name"
                    className="form-control fmc"
                    placeholder="Name of NOK"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <input
                    type="text"
                    name="full name"
                    className="form-control fmc"
                    placeholder="Relationship to NOK"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <input
                    type="number"
                    name="full name"
                    className="form-control fmc"
                    placeholder="Phone number (home/Mobile) NOK"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mt-2 mb-3">
                  <input
                    type="text"
                    name="full name"
                    className="form-control fmc"
                    placeholder="Vocabulary work experience(explain) if yes"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <small className="fs-4 fw-bolder black">
                    How did you learn about us?
                  </small>{" "}
                  <br />
                  <small>
                    tell us how you learn about us (Agnes Abiona <br />{" "}
                    Foundation)
                  </small>
                  <select className="form-control fmc ">
                    <option>Twitter</option>
                    <option>Facebook</option>
                    <option>instagram</option>
                    <option>Google</option>
                    <option>Linkdln</option>
                  </select>
                </div>
                <div className="mt-2 mb-3">
                  <small className="black fs-6">
                    Your <b className="golden">Documents</b>
                  </small>{" "}
                  <br />
                  <small>Upload CV</small>
                  <div>
                    <input name="CV" type="file" className="form-control fmc" />
                  </div>
                  <small>Passport photograph</small>
                  <div>
                    <input
                      type="file"
                      className="form-control fmc"
                      name="passport"
                    />
                  </div>
                  <div>
                    <input type="checkbox" className="" name="oat" />
                    <small>
                      {" "}
                      every informations i have provided about my self are true
                    </small>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className=""
                      name="terms and conditions"
                    />
                    <small>
                      {" "}
                      I agree to agnesabionafoundation terms and conditions
                    </small>
                  </div>
                  <div>
                    <input type="checkbox" className="" name="agreement" />
                    <small>
                      {" "}
                      I agree to provide additional information to the
                      organization (AAF) on request
                    </small>
                  </div>
                  <button className="mt-5 form-control btn btn-warning">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;
