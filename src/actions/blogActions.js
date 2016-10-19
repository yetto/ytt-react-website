import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/*

### WP REST API ENDPOINTS:
  http://dev1.elyetto.com/wp-json/

### Build collection from:
  http://dev1.elyetto.com/wp-json/wp/v2/tags
  http://dev1.elyetto.com/wp-json/wp/v2/categories
  http://dev1.elyetto.com/wp-json/wp/v2/pages

http://dev1.elyetto.com/wp-json/wp/v2/posts?slug=we-are-mase-puzzle
http://dev1.elyetto.com/wp-json/wp/v2/posts?per_page=5
http://dev1.elyetto.com/wp-json/wp/v2/posts?search=puzzle
http://dev1.elyetto.com/wp-json/wp/v2/posts?categories=6
http://dev1.elyetto.com/wp-json/wp/v2/?tags=80

http://dev1.elyetto.com/wp-json/wp/v2/categories?orderby=name&order=desc
http://dev1.elyetto.com/wp-json/wp/v2/categories?hide_empty=true
http://dev1.elyetto.com/wp-json/wp/v2/categories?exclude=3

http://dev1.elyetto.com/wp-json/wp/v2/posts/306
http://dev1.elyetto.com/wp-json/wp/v2/pages?slug=get-menu

http://dev1.elyetto.com/wp-json/wp/v2/media
http://dev1.elyetto.com/wp-json/wp/v2/types
http://dev1.elyetto.com/wp-json/wp/v2/statuses
http://dev1.elyetto.com/wp-json/wp/v2/taxonomies
http://dev1.elyetto.com/wp-json/wp/v2/tags
http://dev1.elyetto.com/wp-json/wp/v2/users
http://dev1.elyetto.com/wp-json/wp/v2/comments

Logged in user:
http://dev1.elyetto.com/wp-json/wp/v2/users/me

*/





/* WP API URL */
const baseUrl = 'http://dev1.elyetto.com/wp-json/wp/'

/* Paths */
const all = 'v2/posts/'
const allFromCategorie = 'v2/posts?categories=' // ID
const categorie = 'v2/categories?hide_empty=true'
const post = 'v2/posts/' // ID

const categories = {
  words : "1",
  photography : "2",
  code : "3",
  inspiration : "4",
  tunes : "5",
  share : "6"
}

const get_categorie_id = (name) => {
  if (typeof name != "string") return 0;
  return categories[name.toLowerCase()];
}

/*
* Get latest post
* http://dev.elyetto.com/devYtt/get-archives/?type=postbypost&order=ASC
*/
export function fetchLatest() {
  console.log("#BlogActions > fetchLatest");
  return function(dispatch) {
    axios.get(baseUrl+all)
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
  const categorieId = get_categorie_id(categoryName);
  console.log("#BlogActions > fetchPosts:",categoryName,categorieId);
  return function(dispatch) {
    axios.get(baseUrl+allFromCategorie+categorieId)
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
  console.log("fetchPost");
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
  console.log("fetchCategories");
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