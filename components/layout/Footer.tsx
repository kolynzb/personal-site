import React from "react";
import siteSettings from "@config/site.json";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="footer" className="footer">
      <ul className="social social-fixed">
        <li>
          <a href="#">
            <i className="lni lni-twitter-filled"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="lni lni-behance-original"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="lni lni-instagram-original"></i>
          </a>
        </li>
      </ul>

      <div className="copyright copyright-fixed d-none d-md-block">
        &copy; {siteSettings.name} {new Date().getFullYear()}
        <br />
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
