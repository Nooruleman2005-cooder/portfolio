import React from "react";

const Contact = () => {
  return (
    <>
    <div className="contact">
      <h1 data-aos="fade-up">Contact Me</h1>
      <p data-aos="fade-up">
        Feel free to reach out to me via email or phone. I’ll be happy to
        connect with you!
      </p>

      <div className="contact-details">
        <p data-aos="fade-up">
          📧 Email:{" "}
          <a href="mailto:digitalnooruleman@gmail.com">
            digitalnooruleman@gmail.com
          </a>
        </p>
        <p data-aos="fade-up">
          📱 Phone:{" "}
          <a href="tel:03104534427">
            0310-4534427
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Contact;
