import React from "react";
import "../LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
  const { useState } = React;
  const [inputtext, setinputtext] = useState({
    email: "",
    password: "",
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpassword, setwarnpassword] = useState(false);

  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpassword(false);
    if (inputtext.email === "") {
      setwarnemail(true);
    } else if (inputtext.password === "") {
      setwarnpassword(true);
    } else {
      alert("form submitted");
    }
  };

  const Eye = () => {
    if (password === "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };
  return (
    <>
      <div className="container-login">
        <div className="card-login">
          <div className="text-login">
            <h3>Welcome Back!</h3>
            <p>Enter your credentials to access your account.</p>
          </div>
          <form>
            <div className="input-text-login">
              <input
                type="text"
                className={` ${warnemail ? "warning-login" : ""}`}
                placeholder="Enter your email"
                value={inputtext.email}
                onChange={inputEvent}
                name="email"
              />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="input-text-login">
              <input
                type={password}
                className={` ${warnpassword ? "warning-login" : ""} ${
                  type ? "type_password-login" : ""
                }`}
                placeholder="Enter your password"
                value={inputtext.password}
                onChange={inputEvent}
                name="password"
              />
              <FontAwesomeIcon icon={faLock} />
              <FontAwesomeIcon onClick={Eye} icon={eye ? faEyeSlash : faEye} />
            </div>
            <div className="buttons-login">
              <button type="submit">Sign in</button>
            </div>
            <div className="forgot-login">
              <p>
                Forgot your password? <a href="/">Reset Password</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
