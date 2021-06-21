import React, { useState } from "react";
import { Button,Row, Col, Form } from "react-bootstrap";

const ContactForm = () => {
    const [username, setUsername] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");
  return (
    <div className="contactus">
      <section className="right" style={{ paddingTop: "8px" }}>
        <h1 style={{ margin: "0 ", color: "white", textAlign: "center" }}>
          Contact Us
        </h1>
        <form
          action="https://formsubmit.co/ed92179d996bb9fa1dd996f559e6ff95"
          method="POST"
        >
          <input type="hidden" name="_next" value="https://youtube.com" />
          <input
            type="hidden"
            name="_subject"
            value="New submission from Chanakya!"
          ></input>
          <input
            className="input"
            name="userame"
            placeholder="Username"
            required
          />
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
          <textarea name="message" placeholder="Message" required />
          <div className="text-center">
            <input type="submit" className="button" value="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;

{/* <Form>
  <Row>
  <Col sm={12} md={6}>
  <Form.Group controlId="formGroupPassword">
  <Form.Label>Username</Form.Label>
  <Form.Control type="text" placeholder="Username..." />
  </Form.Group>
  </Col>
  <Col sm={12} md={6}>
  <Form.Group controlId="formGroupEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Col>
  </Row>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={4} />
  </Form.Group>
</Form> */}