import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact_page">
        {/* google map */}
        <div className="googlemap_responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583813507!2d91.81983560975806!3d24.900058347518424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1733931383869!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* form section */}
        <div className="form_sec">
          <h2>Feel Free To Contact Us</h2>
          <form action="https://formspree.io/f/mzzbqydl" method="POST">
            <div>
              <input
                type="text"
                name="username"
                placeholder="enter username"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="enter email"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <textarea
                type="message"
                placeholder="text here"
                required
                name="message"
                autoComplete="off"
              />
            </div>
            <div>
              <input type="submit" value={"Send"} className="input_btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
