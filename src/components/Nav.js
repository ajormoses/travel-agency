const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-menu">
        <a href="#article-one">
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
