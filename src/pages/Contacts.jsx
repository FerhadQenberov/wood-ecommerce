import axios from "axios";
import React, { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const formData = {
    name: name,
    surname: surname,
    email: email,
    text: text,
  };
  
  const fetch = async () => {
    const requests = await axios.post(
      "http://localhost:4000/contact",
      formData
    );
    console.log(requests.data);
  };

  const submitForm = (e) => {
    e.preventDefault();
    fetch();
    
  };

  return (
    <div className="contacts">
      <div className="container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12163.625271477436!2d49.8157811!3d40.34442415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2saz!4v1690063587129!5m2!1sru!2saz"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact">
          <div className="contact-info">
            <h6>Broadway Store</h6>
            <p>1260 Broadway, San Franci, CA 94109</p>
            <p>
              Phone:<b>055 247 04 30</b>
            </p>
            <p>
              Email:<b>qenberovferhad@gmail.com</b>
            </p>
          </div>
          <div className="contact-info">
            <h6>Valencia Store</h6>
            <p>1260 Broadway, San Franci, CA 94109</p>
            <p>
              Phone:<b>055 247 04 30</b>
            </p>
            <p>
              Email:<b>qenberovferhad@gmail.com</b>
            </p>
          </div>
          <div className="contact-info">
            <h6>Emeryville Store</h6>
            <p>1260 Broadway, San Franci, CA 94109</p>
            <p>
              Phone:<b>055 247 04 30</b>
            </p>
            <p>
              Email:<b>qenberovferhad@gmail.com</b>
            </p>
          </div>
          <div className="contact-info">
            <h6>Alameda Store</h6>
            <p>1260 Broadway, San Franci, CA 94109</p>
            <p>
              Phone:<b>055 247 04 30</b>
            </p>
            <p>
              Email:<b>qenberovferhad@gmail.com</b>
            </p>
          </div>
        </div>

        <div className="row">
          <form className="form col-12" onSubmit={submitForm}>
            <div className="nameInput">
              <input
                type="name"
                placeholder="First name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <input
                type="surname"
                placeholder="Last Name"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <textarea
              className="textarea"
              onChange={(e) => setText(e.target.value)}
              name=""
              id=""
              placeholder="Your message"
              cols="110"
              rows="10"
              value={text}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

       
        </div>
      </div>
    </div>
  );
};

export default Contacts;
