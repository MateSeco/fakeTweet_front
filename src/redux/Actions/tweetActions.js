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

const actions = { saveTweets, addTweet };
export default actions;
