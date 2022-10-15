import { useState } from "react";

const Nav = (props) => {
  // const [isActive, setIsActive] = useState(props.toggle);

  const handleClick = () => {
    props.setToggle(true);
  };

  return (
    <nav
      className="nav"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
    >
      <ul className="nav-menu">
        <a href="#article-one" onClick={handleClick}>
          <li>Discover</li>
        </a>
        <a href="#article-two" onClick={handleClick}>
          <li>Services</li>
        </a>
        <a href="#article-four" onClick={handleClick}>
          <li>About Us</li>
        </a>
        <a href="#contact" onClick={handleClick}>
          <li>Contact Us</li>
        </a>
      </ul>
      <div className="nav-login" onClick={handleClick}>
        <p>Login</p>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Nav;
