import React from "react";
import siteSettings from "@config/site.json";
import { formatPhoneNumber } from "@utils";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="section pp-scrollable slide-personal-contacts">
      <div className="slide-container">
        <div className="slide-bg">
          <div className="slide-photo circle-light slide-contacts-circle1 transformLeft"></div>
          <div className="slide-photo circle-brown slide-contacts-circle2 transformRight"></div>
        </div>
        <div className="container">
          <div className="slide-num">8</div>
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="contact-personal-card">
                <div className="contact-personal-card-title animate-element delay7 fadeInDown">
                  <h2 className="slide-title">contact</h2>
                </div>
                <div className="contact-personal-card-detail animate-element delay7 fadeInUp">
                  <div className="row">
                    <div className="col-xl-7 col-lg-10">
                      <div className="title-mini">contact info</div>
                      <div className="slide-title-sub">
                        {siteSettings.address}
                      </div>
                      <div className="slide-title-sub">
                        <a
                          href={`tel:${siteSettings.tel[0]}`}
                          className="phone-link"
                        >
                          {formatPhoneNumber(siteSettings.tel[0])}
                        </a>
                      </div>
                      <div className="text-md text-uppercase">
                        <a
                          href={`mailto:${siteSettings.email}`}
                          className="text-primary"
                        >
                          <strong>{siteSettings.email}</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 animate-element delay7 fadeInUp">
              <div className="slide-title-info">
                Lets grab a coffee and jump on conversation
                <span className="text-primary">chat with me.</span>
              </div>
              <form className="contact-personal-form a-ajax-form">
                <div className="form-group form-group-material a-form-group">
                  <label className="label">Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group form-group-material a-form-group">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group form-group-material a-form-group">
                  <label className="label">Category</label>
                  <select className="form-control" name="category">
                    <option value="">&nbsp;</option>
                    <option value="branding">Branding</option>
                    <option value="webdesign">Web Design</option>
                    <option value="photography">Photography</option>
                    <option value="mobileapp">Mobile App</option>
                  </select>
                </div>
                <div className="form-group form-group-material a-form-group">
                  <label className="label">Project detail(optional)</label>
                  <textarea
                    className="form-control"
                    name="message"
                    cols={30}
                    rows={3}
                  ></textarea>
                </div>
                <div className="form-group control-file a-file">
                  <input type="file" name="file_attach[]" multiple />
                  <div className="file-path-wrapper">
                    <i className="lni lni-paperclip text-primary"></i>
                    <input
                      className="file-path form-control"
                      placeholder="Add Attachment(.doc;.pdf)"
                    />
                  </div>
                </div>
                <div className="message text-success success-message">
                  Your message is successfully 😉 sent...
                </div>
                <div className="message text-danger error-message">
                  Sorry something went wrong 
                </div>
                <div className="control-btn">
                  <button className="btn btn-success" type="submit">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
