const Nav = (props) => {
  return (
    <nav
      className="nav"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
    >
      <ul className="nav-menu">
        <a href="#article-one" onClick={props.toggle}>
          <li>Discover</li>
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
      <div className="nav-login">
        <p>Login</p>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Nav;
