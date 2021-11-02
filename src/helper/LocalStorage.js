let userData = [];

export class LocalStorage {
  addUser = (user) => {
    const existingUser = userData.some((data) => data.email === user.email);
    if (!existingUser) {
      userData.push(user);
    }
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  removeUser = (user) => {
    const removeUserList = userData.filter((x) => x.email !== user.email);
    userData = removeUserList;
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  getUserList = () => {
    const userList = localStorage.getItem("userData");
    if (userList) {
      return JSON.parse(userList);
    }
    return [];
  };
}
