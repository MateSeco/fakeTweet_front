const addProfile = (data) => {
  return {
    type: "ADD_PROFILE",
    payload: data,
  };
};

const follow = (userId) => {
  console.log("EL USER EN ACTION FOLLOW: ", userId);
  return {
    type: "FOLLOW",
    payload: userId,
  };
};

const unfollow = (userId) => {
  console.log("EL USER EN ACTION UNFOLLOW: ", userId);
  return {
    type: "UNFOLLOW",
    payload: userId,
  };
};

const actions = { addProfile, follow, unfollow };
export default actions;
