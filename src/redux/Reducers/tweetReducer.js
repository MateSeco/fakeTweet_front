function tweets(state = [], action) {
  switch (action.type) {
    case "SAVE_TWEETS":
      return action.payload;
    case "ADD_TWEET":
      let auxState = [...state];
      auxState.unshift(action.payload);
      return auxState;

    case "LIKE":
      return state.map((tweet) => {
        if (tweet.id === action.payload.tweetId) {
          return { ...tweet, likes: [...tweet.likes, action.payload.userId] };
        }
        return tweet;
      });

    case "DISLIKE":
      return state.map((tweet) => {
        if (tweet.id === action.payload.tweetId) {
          return {
            ...tweet,
            likes: [
              tweet.likes.filter((user) => user !== action.payload.userId),
            ],
          };
        }
        return tweet;
      });

    default:
      return state;
  }
}

export default tweets;
