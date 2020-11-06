function userReducer(state = [], action) {
  switch (action.type) {
    case "LOGGED":
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        userId: action.payload.userId,
      };

    default:
      return state;
  }
}

export default userReducer;
