import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zf8iycs",
        "template_0ftkh94",
        form.current,
        "user_6B3rTXrOybi6CwNEw5qo9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+32/471 655 428</strong> or email{" "}
                <strong>saka.pascale@gmail.com</strong>
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}></form>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button
                className="btn contact pointer"
                id="submit"
                type="submit"
                value="send"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src="/" alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
