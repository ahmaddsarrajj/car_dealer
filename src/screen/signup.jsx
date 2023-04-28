import React, { useEffect, useState } from "react";
import "./css/login.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [value, setValue] = useState()
  const [AreaList, setAreaList] = useState([])

  useEffect(() => {
    axios.get(`https://cardealerlebanon.com/input/area/view.php`)
    .then(list=>{
      setAreaList(list.data)
      console.log(AreaList)
    })
  }, [])
  
  return (
    <div className="flex_center">
      
    <div className="login our_container">
      <h1 className="login_title">Sign up</h1>
      <p className="login_description">Welcome! you can Snow create your account</p>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className="mb-3" type="text" placeholder="First Name" />
            <Form.Control className="mb-3"type="text"  placeholder="Last Name" />
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              style={{paddingBottom:"12px"}}
            />
            <Form.Select aria-label="Area..">
              <option>Area..</option>
              {
                AreaList?.map((area, i)=>{
                  return(
                    <option key={i} value={area.id}>{area.name}</option>
                  )
                })
              }
            </Form.Select>
          </Form.Group>
          <Button className="btn" color="red" type="submit">
            Sing in
          </Button>
        </Form>
        <p className="link">
          don't have account yet?
          <Link className="ref" to="/login">
            login
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}
