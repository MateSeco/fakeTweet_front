function profileReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PROFILE":
      return action.payload;
    case "FOLLOW":
      return {
        ...state,
        followers: [...state.followers, action.payload],
      };
    case "UNFOLLOW":
      return {
        ...state,
        followers: [
          ...state.followers.filter((user) => user !== action.payload),
        ],
      };
    default:
      return state;
  }
}

export default profileReducer;
