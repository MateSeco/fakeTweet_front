function tweetReducer(state = [], action) {
  switch (action.type) {
    case "SAVE_TWEETS":
      return action.payload;
    case "ADD_TWEET":
      let auxState = [...state];
      auxState.unshift(action.payload);
      return auxState;

    default:
      return state;
  }
}

export default tweetReducer;
