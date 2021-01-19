const logged = (data) => {
  return {
    type: "LOGGED",
    payload: {
      token: data.token,
      userName: data.userName,
      userEmail: data.userEmail,
      userId: data.userId,
      image:data.image
    },
  };
};

const loggedOut = () => {
  return {
    type: "LOGGED_OUT",
  };
};

const update = (data) => {
  return {
    type: "UPDATE",
    payload: {userName:data.userName, image:data.image},
  };
};

const actions = { logged, loggedOut, update };
export default actions;
