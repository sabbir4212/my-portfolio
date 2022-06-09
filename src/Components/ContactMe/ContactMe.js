import React from "react";
import "./ContactMe.css";
import myImg from "../../images/my-img.jpg";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai';

const ContactMe = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log('submited', name, email, message)
  };
  return (
    <div className="contact-me">
      <h1 className="text-center fw-semibold">CONTACT WITH ME</h1>
      <hr />
      <div className="contact-me-full">
        <div className="contact-me-half d-grid justify-content-center">
          <form onSubmit={handleFormSubmit} className="form-inputs">
            <div className="inputs">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="" placeholder="Your Name" />
            </div>
            <div className="inputs">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="" placeholder="Your Email" />
            </div>
            <div className="inputs">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-start send-message">
              <input className="message-btn" type="submit" value="Send Message" />
            </div>
          </form>
        </div>
        <div className="contact-me-half d-grid justify-content-center">
          <img className="ms-5" src={myImg} alt="" />
          <div className="fw-bold">
            <h3>Email: sabbirhosan370@gmail.com</h3>
            <h3>Number: +8801303871763</h3>
            <h3>Address: Tangail, Dhaka, Bangladesh</h3>
          </div>
          <div className="flex justify-content-between social-contacts">
              <a target="_blank" className="socia-icons" href={"https://www.linkedin.com/in/md-sabbir-a56163241/"}><AiFillLinkedin></AiFillLinkedin></a>
              <a target="_blank" className="socia-icons" href={"https://github.com/sabbir4212"}><AiFillGithub></AiFillGithub></a>
              <a target="_blank" className="socia-icons" href={"https://www.facebook.com/profile.php?id=100028217645722"}><AiFillFacebook></AiFillFacebook></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
