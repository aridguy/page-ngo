import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutImage from "../Assets/founder.png";
import Aboutpics from "../Assets/about-pics.jpg"

const About = () => {
  return (
    <div>
      <Navbar />

      <section className="hero-bg-about place-one">
        <div className="container">
          <div className="row">
            <div className="">
              <h2 className="text-white ">
                ABOUT AGNES ABIONA
                <strong className="fw-bolder gold"> FOUNDATION</strong>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div>
                <img
                  className=""
                  width="60%"
                  src={AboutImage}
                  alt="agnes abiona founder images2"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p className="fs-1 black fw-bold gold">About Us</p>
              </div>
              <div>
                <h1 className="fw-bold black">
                  WHY EMPOWERMENT OF GIRLS AND YOUNG WOMEN?
                </h1>
              </div>
              <div>
                <p>
                  AGNES ABIONA FOUNDATION is a registered non-governmental
                  non-profit charitable organization based in Nigeria that
                  provide aid for underprivileged girls and young women through
                  development of empowerment program in order to fulfil their
                  God given potential.
                </p>
                <p>
                  In Nigeria, the United Nations posits thatwomen and girls make
                  up more than half of population but still do not have
                  sufficient access nor opportunities to realise their full
                  potential as agents of change who can provide solutions to
                  most of the country’s most pressing issues. In a bid to
                  address the empowerment for the poor resource and
                  underprivileged girls and young women,AGNES ABIONA FOUNDATION
                  has broken down resource needed for the empowerment into
                  categories.
                </p>
                <button className="btn btn-warning">Contact Us</button>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h1 className="black Purple underline">AFF</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <p className="black">
                These include human capital; education, training, vocational
                skills, financial capital; grants and financial assistance,
                social capital; networking and mentoring and physical capital;
                tools and machine. AAF will use available resources within the
                foundation to empower women as a strategy that will focus on
                redirecting and reengineering the economic status of the women
                with a view of tackling poverty, violence and unemployment. For
                effectiveness of the program AAF put certain indicators and
                methods in place to target the needs of different beneficiaries
                such as educational supports, vocational skill
                acquisitions/training, capacity building, provision of grants,
                supply of empowerment materials and start up support for women &
                girls.
              </p>
            </div>
            <div className="col-md-6">
             <div>
             <img className="abt-img" src={Aboutpics} alt="about us-pics" />
             </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
