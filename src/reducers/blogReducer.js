export default function reducer(state={
    posts: [],
    latest: [],
    categories: [],
    error: null,
  }, action) {

    switch (action.type) {


      /*
      * Fetch Latest (Posts from all categories)
      *
      */
      case "FETCH_LATEST_FULFILLED": {
        return Object.assign({}, state, { error: action.payload })
      }

      case "FETCH_LATEST_REJECTED": {
        return Object.assign({}, state, { latest: action.payload })
      }


      /*
      * Fetch Categories
      *
      */
      case "FETCH_CATEGORIES_FULFILLED": {
        return Object.assign({}, state, { error: action.payload })
      }

      case "FETCH_CATEGORIES_REJECTED": {
        return Object.assign({}, state, { categories: action.payload })
      }


      /*
      * Fetch posts
      *
      */
      case "FETCH_POSTS_REJECTED": {
        return Object.assign({}, state, { error: action.payload })
      }

      case "FETCH_POSTS_FULFILLED": {
        return Object.assign({}, state, { posts: action.payload })
      }


      /*
      * Fetch Single Post
      *
      */
      case "FETCH_POST_REJECTED": {
        return Object.assign({}, state, { error: action.payload })
      }
      case "FETCH_POST_FULFILLED": {
        const { id, post_content } = action.payload
        const newPosts = [...state.posts]
        const PostToUpdate = newPosts.findIndex(post => post.id === id)
        newPosts[postToUpdate] = action.payload;
        return Object.assign({}, state, { posts: action.payload })
      }


      /* OTHER
      case "ADD_POST": {
        return {
          ...state,
          posts: [...state.posts, action.payload],
        }
      }
      case "UPDATE_POST": {
        const { id, post_content } = action.payload
        const newPosts = [...state.posts]
        const postToUpdate = newPosts.findIndex(post => post.id === id)
        newPosts[postToUpdate] = action.payload;
        return {
          ...state,
          posts: newPosts,
        }
      }
      case "DELETE_POST": {
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload),
        }
      }
      */

    } // END Switch

    return state
}
