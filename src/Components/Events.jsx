import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Pics1 from "../Assets/home/pics1.jpg";
import Pics2 from "../Assets/home/pics2.jpg";
import Pics3 from "../Assets/home/pics3.jpg";
import Pics4 from "../Assets/home/pics4.jpg";
import Pics5 from "../Assets/home/pics5.jpg";
import Pics6 from "../Assets/home/pics6.jpg";

const Events = () => {
  return (
    <div>
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div>
                <p className="fs-1 black fw-bold">SOME PAST EVENTS</p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <Carousel
                axis="horizontal"
                infiniteLoop={true}
                // useKeyboardArrow={true}
                // thumbWidth={140}
                transitionTime={500}
                width={"100"}
              >
                <div>
                  <img src={Pics1} alt="pics 1" />
                  <p className="legend fs-3">FOUNDATION PALLIATIVE PROGRAM</p>
                  <span></span>
                </div>
                <div>
                  <img src={Pics2} alt="pics 1" />
                  <p className="legend fs-3">FOUNDATION PALLIATIVE</p>
                  <span></span>
                </div>
                <div>
                  <img src={Pics3} alt="pics 1" />
                  <p className="legend fs-3">OFFICIAL LAUNCHING</p>
                  <span></span>
                </div>
                <div>
                  <img src={Pics4} alt="pics 1" />
                  <p className="legend fs-3">OFFICIAL LAUNCHING</p>
                  <span></span>
                </div>
                <div>
                  <img src={Pics5} alt="pics 1" />
                  <p className="legend fs-3"> FOUNDATION SUPPORT</p>
                  <span></span>
                </div>
                <div>
                  <img src={Pics6} alt="pics 1" />
                  <p className="legend fs-3">THE PALLIATIVE FOR WIDOWS</p>
                  <span></span>
                </div>
              </Carousel>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
