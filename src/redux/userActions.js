const logged = (token) => {
  return {
    type: "LOGGED",
    payload: token,
  };
};

const actions = { logged };
export default actions;
