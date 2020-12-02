const logged = (data) => {
  return {
    type: "LOGGED",
    payload: {
      token: data.token,
      userName: data.userName,
      userEmail: data.userEmail,
      userId: data.userId,
    },
  };
};

const loggedOut = () => {
  return {
    type: "LOGGED_OUT",
  };
};

const update = (userName) => {
  return {
    type: "UPDATE",
    payload: userName,
  };
};

const actions = { logged, loggedOut, update };
export default actions;
