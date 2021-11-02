import React, { useState } from "react";
import { connect } from "react-redux";
import * as userActions from "../actions/userActions";
import "../style/userTable.scss";

const UserTable = (props) => {
  const [searchValue, setSearchValue] = useState("");

  let data = props.userList;
  console.log("data: ", data);
  const getTableContent = () => {
    return data.map((data) => {
      return (
        <tr key={data.id} role="row">
          <td width="33%">{data.id}</td>
          <td width="33%">{data.name}</td>
          <td width="33%">{data.email}</td>
        </tr>
      );
    });
  };

  return (
    <div className="tableContainer">
      <div className="inputContainer">
        <input
          className="inputStyle"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="submitStyle"
          onClick={() => props.userSearch(searchValue)}
        >
          Search
        </button>
        <span onClick={() => props.userReset()}>Reset</span>
      </div>

      {data?.length > 0 ? (
        <table width="100%">
          <thead className="thead-light">
            <tr role="row">
              <th width="33%">Sr. no.</th>
              <th width="33%">Name</th>
              <th width="33%">Email</th>
            </tr>
          </thead>
          <tbody>{getTableContent()}</tbody>
        </table>
      ) : (
        <p className="noDataStyle">No user found</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userList: state.userList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSearch: (value) => dispatch(userActions.getUserSearch(value)),
    userReset: () => dispatch(userActions.getUserReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
