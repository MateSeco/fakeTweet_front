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

const actions = { logged, loggedOut };
export default actions;
