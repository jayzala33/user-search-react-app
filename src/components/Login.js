import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { LocalStorage } from "../helper/LocalStorage";
import "../style/register.scss";

const localStore = new LocalStorage();

const Login = () => {
  let history = useHistory();

  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label className="labelStyle">{label}</label>
        <input ref={ref} type={type} className="inputStyle" required />
      </div>
    );
  });

  const Form = ({ onSubmit }) => {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      onSubmit(data);
      const hasUser = localStore
        .getUserList()
        .some((x) => x.email === data.email);
      setIsAuthenticate(!hasUser);
      hasUser && history.push("/dashboard");
    };
    return (
      <form className="formStyle" onSubmit={handleSubmit}>
        <Field ref={emailRef} label="Email:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button className="submitStyle" type="submit">
            Login
          </button>
        </div>
      </form>
    );
  };

  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };

  return (
    <>
      <h1 className="headerStyle">Login</h1>
      <div className="appStyle">
        <Form onSubmit={handleSubmit} />
      </div>
      {isAuthenticate && (
        <p className="authenticateStyle">
          Please enter correct Email and password
        </p>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
