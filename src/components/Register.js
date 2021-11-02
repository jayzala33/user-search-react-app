import React from "react";
import { connect } from "react-redux";
import { LocalStorage } from "../helper/LocalStorage";
import { useHistory } from "react-router-dom";
import "../style/register.scss";

const localStore = new LocalStorage();

const Register = () => {
  let history = useHistory();

  const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label className="labelStyle">{label}</label>
        <input ref={ref} type={type} className="inputStyle" />
      </div>
    );
  });

  const Form = ({ onSubmit }) => {
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      onSubmit(data);
      localStore.addUser(data);
      history.push("/dashboard");
    };
    return (
      <form className="formStyle" onSubmit={handleSubmit}>
        <Field ref={nameRef} label="Name:" type="text" />
        <Field ref={emailRef} label="Email:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button className="submitStyle" type="submit">
            Register
          </button>
        </div>
        <h2 className="dividerTextStyle">Or</h2>
        <div>
          <button
            className="submitStyle"
            onClick={() => history.push("/login")}
          >
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
      <h1 className="headerStyle">Registration form</h1>
      <div className="appStyle">
        <Form onSubmit={handleSubmit} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
