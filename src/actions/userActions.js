export const GET_USERS_SEARCH = "GET_USERS_SEARCH";
export const GET_USERS_RESET = "GET_USERS_RESET";

export const getUserSearch = (payload) => {
  return { type: GET_USERS_SEARCH, payload };
};

export const getUserReset = () => {
  console.log("payload: ");
  return { type: GET_USERS_RESET };
};
