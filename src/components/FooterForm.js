import React, { useState } from "react";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      const { name, value } = e.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="form-newsletter"
      id="contact"
      data-aos="zoom-out"
      data-aos-duration="1000"
    >
      <h2>Get a newsletter</h2>
      <p>For the latest deals and tips, travel no further than your inbox</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="inputForm"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button className="submit" style={{ background: "#52cf3d" }}>
          Subscribe
        </button>
      </form>
      <div className="social-media">
        <img src="./images/fb.png" alt="facebook" />
        <img src="./images/twitter.png" alt="twitter" />
        <img src="./images/instagram.png" alt="instagram" />
      </div>
    </div>
  );
};

export default FooterForm;
