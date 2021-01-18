function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGGED":
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        userId: action.payload.userId,
        image: action.payload.image
      };

    case "LOGGED_OUT":
      return [];

    case "UPDATE":
      return { ...state, userName: action.payload };

    default:
      return state;
  }
}

export default userReducer;
