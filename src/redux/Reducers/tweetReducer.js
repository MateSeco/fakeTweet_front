function tweets(state = [], action) {
  switch (action.type) {
    case "SAVE_TWEETS":
      return action.payload;

    case "ADD_TWEET":
      let auxState = [...state];
      auxState.unshift(action.payload);
      return auxState;

    /* [new Tweet, ...tweets] -->> otra manera de hacer ADD Tweet*/

    case "DELETE_TWEET":
      return [...state.filter((tweet) => tweet._id !== action.payload)];

    case "LIKE":
      return state.map((tweet) => {
        if (tweet._id === action.payload.tweetId) {
          return { ...tweet, likes: [...tweet.likes, action.payload.userId] };
        }
        return tweet;
      });

    case "DISLIKE":
      return state.map((tweet) => {
        if (tweet._id === action.payload.tweetId) {
          return {
            ...tweet,
            likes: [
              ...tweet.likes.filter((user) => user !== action.payload.userId),
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
