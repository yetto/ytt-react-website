import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/*
wp-admin/admin-ajax.php?action=index
?action=post_love_add_love&post_id=23
*/

/* WP API URL */
const baseUrl = 'http://dev.elyetto.com/devYtt/'

/* Slugs */
const latest = 'get-archives/?type=postbypost&order=ASC'
const cat = 'category/'
const cats = 'get-categories/'

/*
* Get latest post
* http://dev.elyetto.com/devYtt/get-archives/?type=postbypost&order=ASC
*/
export function fetchLatest() {
  return function(dispatch) {
    axios.get(baseUrl+latest)
      .then((response) => {
        dispatch({type: "FETCH_LATEST_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_LATEST_REJECTED", payload: err})
      })
  }
}



/*
* Ej
* http://dev.elyetto.com/devYtt/category/Photography/
*/
export function fetchPosts(categoryName) {
  return function(dispatch) {
    axios.get('http://dev.elyetto.com/devYtt/wp-admin/admin-ajax.php?action=index')
      .then((response) => {
        dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POSTS_REJECTED", payload: err})
      })
  }
}



/*
* Ej
* http://dev.elyetto.com/devYtt/shades-of-blue/
*/
export function fetchPost(id) {
  return function(dispatch) {
    axios.get(baseUrl+'?p='+id)
      .then((response) => {
        dispatch({type: "FETCH_POST_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POST_REJECTED", payload: err})
      })
  }
}



/*
* Ej
* http://dev.elyetto.com/devYtt/get-categories/
*/
export function fetchCategories() {
  return function(dispatch) {
    axios.get(baseUrl+cats)
      .then((response) => {
        dispatch({type: "FETCH_CATEGORIES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_CATEGORIES_REJECTED", payload: err})
      })
  }
}