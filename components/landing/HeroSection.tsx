import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="section pp-scrollable slide-dark slide-dark-footer slide-personal-intro">
    <div className="slide-container">
      <div className="slide-bg">
        <div className="slide-photo circle-golden slide-intro-circle1 transformLeft"></div>
        <div className="slide-photo circle-brown slide-intro-circle2 transformRight"></div>
        <div className="slide-photo slide-intro-man"></div>
      </div>
      <div className="container">
        <div className="slide-num">1</div>
        <div className="row">
          <div className="col-sm-6 col-10">
            <h1 className="slide-title animate-element delay5 fadeInDown">
              Atuhaire Collins
            </h1>
            <div className="animate-element delay5 fadeInUp">
              <h3 className="slide-title-sub">
              Software Developer &amp; Visual Product Designer
              </h3>
              <div className="slide-descr slide-descr-intro">
              I’m Atuhaire Collins Benda, a fullstack developer &amp;
              Visual Product Designer based in kampala, Uganda.
              “Conjuring Innovative Brilliance”.
              </div>
              <div className="slide-btn">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#send-request"
                >
                  get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection