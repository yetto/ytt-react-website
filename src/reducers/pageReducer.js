/*
*
* Reducer for X Y W H values
*
*/

export default function reducer(state={
    posWidth: Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ),
    posHeight: Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      ),
    posX: 0,
    posY: 0,
    mousePos: {
      x: 0,
      y: 0
    }
  }, action) {
    switch (action.type) {

      case 'MOUSE_POS_CHANGED': {
        return Object.assign({}, state, { mousePos: action.payload })
      }

      case 'POSX_CHANGED': {
        return Object.assign({}, state, { posX: action.payload })
      }

      case 'POSY_CHANGED': {
        return Object.assign({}, state, { posY: action.payload })
      }

      case 'POSWIDTH_CHANGED': {
        return Object.assign({}, state, { posWidth: action.payload })
      }

      case 'POSHEIGHT_CHANGED': {
        return Object.assign({}, state, { posHeight: action.payload })
      }

      default:{
        return Object.assign({}, state)
      }

    }
    return state
}


/* Fully form reducer


NOTE:
Remember that since you us:
https://github.com/pburtchaell/redux-promise-middleware

You can use cases like:

  FOO_PENDING
  FOO_FULFILLED
  FOO_REJECTED

export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TWEETS": {
        return {...state, fetching: true}
      }
      case "FETCH_TWEETS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TWEETS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tweets: action.payload,
        }
      }
      case "ADD_TWEET": {
        return {
          ...state,
          tweets: [...state.tweets, action.payload],
        }
      }
      case "UPDATE_TWEET": {
        const { id, text } = action.payload
        const newTweets = [...state.tweets]
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetToUpdate] = action.payload;

        return {
          ...state,
          tweets: newTweets,
        }
      }
      case "DELETE_TWEET": {
        return {
          ...state,
          tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}


*/