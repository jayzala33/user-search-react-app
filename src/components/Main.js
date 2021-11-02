import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import "../style/main.scss";
import Register from "./Register";
import Login from "./Login";
import UserTable from "./UserTable";

const Main = (props) => {
  return (
    <div className="main">
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Register} />
        <Route exact path="/dashboard" component={UserTable} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
