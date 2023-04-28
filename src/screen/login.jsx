import React, { useState } from "react";
import "./css/login.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [value, setValue] = useState();
  const [error, setError] = useState();

  const handleSubmit = () => {
    if (value.length === 0) {
      console.log(error);
    } else {
      const url = `https://cardealerlebanon.com/input/webapi/signin.php`;
      let Data = { phone: value };
      axios
        .post(url, { Data })
        .then((response) => console.log(response))
        .catch((error) => alert(error));
      console.log(Data);
    }
  };
  return (
    <div className="flex_center">
      <div className="login our_container">
        <h1 className="login_title">Sign in</h1>
        <p className="login_description">Welcome back you've been missed</p>
        <div className="form">
          <Form method="post" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </Form.Group>
            <Button className="btn" onClick={handleSubmit}>
              Sing in
            </Button>
          </Form>
          <p className="link">
            don't have account yet?
            <Link className="ref" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
