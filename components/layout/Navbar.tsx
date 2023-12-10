import React from "react";
import siteSettings from "@config/site.json";
import { formatPhoneNumber } from "@utils";

type Props = {};

const navSocials = [
  {
    icon: "lni lni-twitter-filled",
    link: "https://twitter.com/Kolynz_b",
  },
  {
    icon: "lni lni-github-original",
    link: "https://github.com/kolynzb/",
  },
  {
    icon: "lni lni-linkedin-original",
    link: "https://www.linkedin.com/in/atuhaire-collins",
  },
];

const Navbar = (props: Props) => {
  return (
    <header id="header" className="header header-fixed">
      <div className="header-bg"></div>
      <div className="container-fluid clearfix">
        <div className="brand">
          <a href="#Intro">
            <div className="brand-name font-custom">
              {siteSettings.nickname}
            </div>
          </a>
        </div>

        <button className="nav-toggle-btn a-nav-toggle">
          <span className="nav-toggle">
            <span className="stick stick-1"></span>
            <span className="stick stick-2"></span>
          </span>
        </button>

        <div className="header-content d-none d-md-block">
          <div className="row">
            <div className="col-md-3">
              <div className="header-tagline">
                innovate
                <br />
                design
              </div>
            </div>
            <div className="col-md-9">
              <div className="header-contacts">
                <div className="header-contact-item">
                  Call me.&nbsp;
                  <a href={`tel:${siteSettings.tel[0]}`} className="phone-link">
                    {formatPhoneNumber(siteSettings.tel[0])}
                  </a>
                </div>
                <div className="header-contact-divider">/</div>
                <div className="header-contact-item">
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="mail-link"
                  >
                    {siteSettings.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hide-menu a-nav-toggle"></div>

      <div className="menu">
        <div className="menu-lang">
          <a href="#" className="menu-lang-item active">
            Eng
          </a>
          <a href="#" className="menu-lang-item">
            fra
          </a>
          <a href="#" className="menu-lang-item">
            ger
          </a>
        </div>

        <nav className="menu-main" id="accordion">
          <ul id="menuMain">
            <li data-menuanchor="Intro" className="active">
              <a href="#Intro">Intro</a>
            </li>
            <li data-menuanchor="Blog">
              <a href={`${siteSettings.blog_link}`}>Blog</a>
            </li>
            <li data-menuanchor="Services">
              <a href="#Services">Services</a>
            </li>
            <li data-menuanchor="Projects">
              <a href="#Projects">Projects</a>
            </li>
            <li data-menuanchor="Awards">
              <a href="#Awards">Awards</a>
            </li>
            <li data-menuanchor="Experience">
              <a href="#Experience">Experience</a>
            </li>
            <li data-menuanchor="Clients">
              <a href="#Clients">Clients</a>
            </li>
            <li data-menuanchor="Testimonials">
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li data-menuanchor="Contact">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="menu-footer">
          <ul className="social social-rounded">
            {navSocials.map((social, key) => (
              <li key={key}>
                <a href={`${social.link}`}>
                  <i className={`${social.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
          <div className="menu-copyright">
            &copy; {siteSettings.nickname} {new Date().getFullYear()}
            <br />
            All Rights Reserved
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
