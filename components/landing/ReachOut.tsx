import React from "react";
import siteSettings from "@config/site.json";
import { formatPhoneNumber } from "@utils";

type Props = {};

const ReachOut = (props: Props) => {
  return (
    <div data-anchor="page8" className="pp-scrollable section section-8">
      <div className="scroll-wrap">
        <div
          className="section-bg"
          style={{ backgroundImage: "url(images/bg/contact.jpg);" }}
        ></div>
        <div className="scrollable-content">
          <div className="vertical-title text-white d-none d-lg-block">
            <span>contact</span>
          </div>
          <div className="vertical-centred">
            <div className="boxed boxed-inner">
              <div className="boxed">
                <div className="container">
                  <div className="intro overflow-hidden">
                    <div className="row">
                      <div className="col-md-6">
                        <h2 className="title">
                          {/* <span className="text-primary">New York</span>, USA */}
                        </h2>
                        <h5 className="text-muted">{siteSettings.address}</h5>
                        <section className="contact-address">
                          <h3>
                            <a
                              className="mail"
                              href={`mailto:${siteSettings.email}`}
                            >
                              {" "}
                              {siteSettings.email}
                            </a>
                          </h3>
                          <h3>
                            <a
                              href={`tel:${siteSettings.tel[0]}`}
                              className="phone"
                            >
                              {" "}
                              {formatPhoneNumber(siteSettings.tel[0])}
                            </a>
                          </h3>
                        </section>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info">
                          <form className="js-form" noValidate>
                            <div className="row">
                              <div className="form-group col-sm-6">
                                <input
                                  type="text"
                                  name="name"
                                  required
                                  placeholder="Name*"
                                  aria-required="true"
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <input
                                  type="email"
                                  required
                                  name="email"
                                  placeholder="Email*"
                                />
                              </div>
                              <div className="form-group col-sm-12">
                                <input
                                  type="text"
                                  name="subject"
                                  placeholder="Subject (Optional)"
                                />
                              </div>
                              <div className="form-group col-sm-12">
                                <textarea
                                  name="message"
                                  required
                                  placeholder="Message*"
                                ></textarea>
                              </div>
                              <div className="form-group form-group-message col-sm-12">
                                <span id="success" className="text-primary">
                                  Thank You, your message is successfully sent!
                                </span>
                                <span id="error" className="text-primary">
                                  Sorry, something went wrong{" "}
                                </span>
                              </div>
                              <div className="col-sm-12">
                                <button type="submit" className="btn">
                                  Contact me
                                </button>
                              </div>
                            </div>
                          </form>
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
    </div>
  );
};

export default ReachOut;
