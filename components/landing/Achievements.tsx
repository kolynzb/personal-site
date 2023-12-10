/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {}

const Achievements = (props: Props) => {
  return (
    <div className="section pp-scrollable slide-personal-clients">
    <div className="slide-container">
      <div className="slide-bg"></div>
      <div className="container">
        <div className="slide-num">6</div>
        <div className="row">
          <div className="col-lg-5">
            <h3 className="slide-title-info mr-lg-5 pr-lg-3 animate-element delay5 fadeInDown">
              Ive been fortunate to work with and for people from some
              <span className="text-primary">
                amazing organizations.
              </span>
            </h3>
            <div className="client-list animate-element delay5 fadeInUp">
              <div className="clients-title title-mini">
                achievements
              </div>
              <div className="client-item media">
                <div className="client-icon">
                  <i className="icon-partners"></i>
                </div>
                <div className="media-body">
                  <div className="client-item-title">6,142</div>
                  <div className="client-item-descr slide-descr">
                    Partners worldwide, as well as designers,
                    developers and marketers.
                  </div>
                </div>
              </div>
              <div className="client-item media">
                <div className="client-icon">
                  <i className="icon-project"></i>
                </div>
                <div className="media-body">
                  <div className="client-item-title">3,498</div>
                  <div className="client-item-descr slide-descr">
                    Project completed and delivery on worldwide with
                    more 60 countries.
                  </div>
                </div>
              </div>
              <div className="client-item media">
                <div className="client-icon">
                  <i className="icon-worldwide"></i>
                </div>
                <div className="media-body">
                  <div className="client-item-title">11,024</div>
                  <div className="client-item-descr slide-descr">
                    Employees & Staffs worldwide at present.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-1 d-none d-xl-block"></div>
          <div className="col-xl-6 col-lg-7">
            <div className="clients-photo animate-element delay5 fadeZooming">
              <div className="clients-photo-item clients-photo-item1">
                <div className="inside">
                  <img src="img/pic-client-1.png" alt="" />
                </div>
              </div>
              <div className="clients-photo-item clients-photo-item2">
                <div className="inside">
                  <img src="img/pic-client-2.png" alt="" />
                </div>
              </div>
              <div className="clients-photo-item clients-photo-item3">
                <div className="inside">
                  <img src="img/pic-client-3.png" alt="" />
                </div>
              </div>
              <div className="clients-photo-item clients-photo-item4">
                <div className="inside">
                  <img src="img/pic-client-4.png" alt="" />
                </div>
              </div>
              <div className="clients-photo-item clients-photo-item5">
                <div className="inside">
                  <img src="img/pic-client-5.png" alt="" />
                </div>
              </div>
              <div className="clients-photo-item clients-photo-item6">
                <div className="inside">
                  <img src="img/pic-client-6.png" alt="" />
                </div>
              </div>
              <div className="clients-photo-item clients-photo-item7">
                <div className="inside">
                  <img src="img/pic-client-7.png" alt="" />
                </div>
              </div>
              <div className="clients-photo-item clients-photo-item8">
                <div className="inside">
                  <img src="img/pic-client-8.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Achievements