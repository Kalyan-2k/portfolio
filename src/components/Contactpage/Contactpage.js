import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch With Me</h2>
        <p className="contactpara">
          {" "}
          I’m currently searching for opportunities for a front-end developer
          role. <br /> If there is any vacancy or whether <br /> you have any
          further questions or just want to say hi, do drop a message.
          <br /> I’ll try my best to get back to you!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            //window.open("https://wa.me/+916309564134");
            window.open(
              "https://https://www.linkedin.com/in/kalyanthiriveedhi2k/"
            );
          }}
        >
          Say Hello
        </button>
        <span></span>
        <hr className="line" />
        <p className="copyright">
          © Copyright 2023.
          <br />
          Created by <span>Kalyan Thiriveedhi</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
