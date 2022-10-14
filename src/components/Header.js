import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header data-aos="fade-down" data-aos-duration="800">
      <div className="container">
        <div className="header">
          <h1 style={{ color: "#000000" }}>
            To<span style={{ color: "#52CF3D" }}>ur</span>
          </h1>
          <div
            className="icon-toggle"
            style={{ fontSize: "1.3rem" }}
            onClick={handleToggle}
          >
            {toggle ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </div>
          <div className="desktop-menu">
            <ul>
              <a href="#article-one">
                <li style={{ color: "#52cf3d" }}>Discover</li>
              </a>
              <a href="#article-two">
                <li>Services</li>
              </a>
              <a href="#article-four">
                <li>About Us</li>
              </a>
              <a href="#contact">
                <li>Contact Us</li>
              </a>
            </ul>
            <h3>Login</h3>
            <button>Register</button>
          </div>
        </div>
        {!toggle && <Nav toggle={toggle} />}
      </div>
    </header>
  );
};

export default Header;
