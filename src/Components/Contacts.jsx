import React from "react";

const Contacts = () => {
  return (
    <div>
      <section className="contacts bg-light pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <p className="fs-2 gold fw-bold">
                      We’d love to hear from you! Give us a call, send us a
                      message?
                    </p>
                  </div>
                  <div className="mt-3">
                    <strong>ADDRESS</strong> <br />
                    <span>
                      5 Adeyemi Alao Street, Community Oke-Ira, Ogba Lagos
                    </span>
                  </div>
                  <div className="mt-3">
                    <strong>EMAIL US</strong> <br />
                    <span>agnesabionafoundation@gmail.com</span>
                  </div>
                  <div className="mt-3">
                    <strong>PHONE NUMBER</strong> <br />
                    <span>+2348063306463, +2348103221622</span>
                  </div>
                  <div className="mt-3">
                    <strong>FIND US ON SOCIAL MEDIA</strong> <br />
                    <span className="fs-2 fab fa-facebook"></span>
                    <span className=" fs-2 fab fa-twitter mx-3"></span>
                    <span className="fs-2 fab fa-youtube mx-3"></span>
                    <span className=" fs-2 fab fa-whatsapp mx-3"></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <iframe
                      title="AGNES ABIONA FOUNDATION"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7925.99618849191!2d3.3492800000000003!3d6.647156000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93f0ab57faff%3A0x8728d5c569c83028!2sAGNES%20ABIONA%20FOUNDATION!5e0!3m2!1sen!2sng!4v1699879379380!5m2!1sen!2sng"
                      width="600"
                      height="450"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
