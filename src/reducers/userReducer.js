import * as userActions from "../actions/userActions";
import mockData from "../mockData/mockData.json";

const initialState = {
  userList: mockData,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.GET_USERS_SEARCH:
      const searchValue = action.payload;
      const searchUser = state.userList.filter(
        (data) =>
          data.name.includes(searchValue) || data.email.includes(searchValue)
      );
      return {
        userList: searchUser,
      };
    case userActions.GET_USERS_RESET:
      return {
        userList: mockData,
      };
    default:
      return state;
  }
};

export default UserReducer;
