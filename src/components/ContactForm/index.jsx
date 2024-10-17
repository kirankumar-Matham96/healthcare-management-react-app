import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "../Button";
import formStyles from "./index.module.css";

export const ContactForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleName = () => {};

  const handleEmail = () => {};

  const handlePassword = () => {};

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    /*{
        
        do something here (send the data to an API)
        
    }*/

    // reset the form
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    nameRef.current.focus();
  };

  return (
    <>
      <Form className={formStyles.form} onSubmit={handleFormSubmit}>
        <Form.Label htmlFor="inputName">Name</Form.Label>
        <Form.Control
          type="text"
          ref={nameRef}
          onChange={handleName}
          id="inputName"
          aria-describedby="nameHelpBlock"
        />
        <Form.Label htmlFor="inputEmail" className="mt-3">
          Email
        </Form.Label>
        <Form.Control
          type="email"
          onChange={handleName}
          ref={emailRef}
          id="inputEmail"
          aria-describedby="emailHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5" className="mt-3">
          Password
        </Form.Label>
        <Form.Control
          className="mb-3"
          onChange={handlePassword}
          ref={passwordRef}
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Button class="btn submit-btn">Submit</Button>
        {/* <Form.Control type="submit" aria-describedby="submitHelpBlock" /> */}
      </Form>
    </>
  );
};
