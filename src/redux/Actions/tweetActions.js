const saveTweets = (tweets) => {
  return {
    type: "SAVE_TWEETS",
    payload: tweets,
  };
};

const addTweet = (newTweet) => {
  return {
    type: "ADD_TWEET",
    payload: newTweet,
  };
};

const like = (tweetId, userId) => {
  return {
    type: "LIKE",
    payload: { tweetId, userId },
  };
};

const dislike = (tweetId, userId) => {
  return {
    type: "DISLIKE",
    payload: { tweetId, userId },
  };
};

const actions = { saveTweets, addTweet, like, dislike };
export default actions;
