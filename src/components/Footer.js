import React from "react";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div data-aos="zoom-in-down" data-aos-duration="1000">
            <h2>Top Destination</h2>
            <ul>
              <li>Turkey</li>
              <li>Indonesia</li>
              <li>Italy</li>
              <li>England</li>
            </ul>
          </div>
          <div data-aos="zoom-in-left" data-aos-duration="1000">
            <h2>Quicklinks</h2>
            <ul>
              <li>Discover</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <h2>Support</h2>
            <ul>
              <li>FAQ</li>
              <li>Help & Support</li>
              <li>Blog</li>
              <li>News</li>
            </ul>
          </div>
          <FooterForm />
        </div>
        <div className="dev-details">
          <small>
            <h5>Copyright 2022</h5>
            <h4 className="dev">
              Dev: <a href="https://www.github.com/ajormoses">@ajormoses</a>
            </h4>
            <h4>
              Designcloud:
              <a href="https://www.behance.net/oluwaseunayomide">
                @oluwaseunayomide
              </a>
            </h4>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
