function userReducer(state, action) {
  switch (action.type) {
    case "LOGGED":
      return { ...state, token: action.payload };

    default:
      return state;
  }
}

export default userReducer;
