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

const deleteTweet = (tweetId) => {
  return {
    type: "DELETE_TWEET",
    payload: tweetId,
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

const actions = { saveTweets, addTweet, deleteTweet, like, dislike };
export default actions;
