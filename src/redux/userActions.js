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

const actions = { logged };
export default actions;
