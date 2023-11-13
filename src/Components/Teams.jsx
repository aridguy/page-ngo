import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// team members images imported below
import Ayomide from "../Assets/Teams/ayomide.jpg";
import Samuel from "../Assets/Teams/samuel.jpg";
import Taiwo from "../Assets/Teams/Taiwo.jpg";
import Tamilore from "../Assets/Teams/tamilore.jpg";
import Omoniyi from "../Assets/Teams/omoniyi.jpg";
import Janet from "../Assets/Teams/janet.jpg";

const Teams = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="bg-lighter p-4">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="">
                <div className="team-place-parent px-2">
                  <span className="fs-2 gold fw-bold">
                    Meet Our Amazing Team{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-4">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              >
                <div>
                  <div className="team-card p-5 bg-grey">
                    <div>
                      <img
                        width="80"
                        src={Janet}
                        className="team-pic"
                        alt="team-foto"
                      />
                    </div>
                    <div>
                      <span className="team-name purple">
                        Sofolahan Janet Oluranti
                      </span>
                    </div>
                    <div>
                      <small className="team-details">
                        A final year student of English Literature in the
                        prestigious Lagos State University.
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card p-5 bg-grey">
                    <div>
                      <img
                        width="80"
                        src={Ayomide}
                        className="team-pic"
                        alt="team-foto"
                      />
                    </div>
                    <div>
                      <span className="team-name purple">
                        Fagbuaro Ayomide Hope
                      </span>
                    </div>
                    <div>
                      <small className="team-details">
                        Fagbuaro Ayomide Hope is an undergraduate of the Federal
                        University of Oye-Ekiti.
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card p-5 bg-grey">
                    <div>
                      <img
                        width="80"
                        src={Taiwo}
                        className="team-pic"
                        alt="team-foto"
                      />
                    </div>
                    <div>
                      <span className="team-name purple">
                        Taiwo Anthony Abode
                      </span>
                    </div>
                    <div>
                      <small className="team-details text-black">
                        Chartered Accountants of Nigeria (ICAN), B.Sc.
                        Economics, Masters in Business Administration (MBA)
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card p-5 bg-grey">
                    <div>
                      <img
                        width="80"
                        src={Samuel}
                        className="team-pic"
                        alt="team-foto"
                      />
                    </div>
                    <div>
                      <span className="team-name purple">Samuel Olowoselu</span>
                    </div>
                    <div>
                      <small className="team-details">
                        Meachanical Engineering graduate from Yaba College of
                        Technology
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card p-5 bg-grey">
                    <div>
                      <img
                        width="80"
                        src={Tamilore}
                        className="team-pic"
                        alt="team-foto"
                      />
                    </div>
                    <div>
                      <span className="team-name purple">Tamilore Bakare</span>
                    </div>
                    <div>
                      <small className="team-details">
                        An undergraduate student of University of Lagos currently studying Physiotherapy. <br /> A Certified first aider
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="team-card p-5 bg-grey">
                    <div>
                      <img
                        width="80"
                        src={Omoniyi}
                        className="team-pic"
                        alt="team-foto"
                      />
                    </div>
                    <div>
                      <span className="team-name">Omoniyi Anita Simisola</span>
                    </div>
                    <div>
                      <small className="team-details">
                      An Educationist and Communication Specialist
                      </small>
                    </div>
                  </div>
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

export default Teams;
