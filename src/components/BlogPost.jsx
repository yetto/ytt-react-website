import React from "react"
import { connect } from "react-redux"

import { fetchPosts, fetchPost } from "../actions/blogActions"

@connect((store) => {
  return {
    posts: store.blog.posts,
  };
})
export default class Layout extends React.Component {

  componentWillUpdate(){
  }

  componentWillMount() {
    this.props.dispatch(fetchPosts('Photography'))
  }

  fetchPost() {
    this.props.dispatch(fetchPost())
  }

  render() {
    const { posts } = this.props;

    let key = 0

    const mappedPosts = posts.map(posts => <li key={"post"+key++}>
        <h1>{posts.title.rendered}</h1>
        <p dangerouslySetInnerHTML={{__html: posts.content.rendered}}></p>
      </li>)

    return <div id="blog">
      <h1>Posts</h1>
      <ul>{mappedPosts}</ul>
    </div>
  } // END Render

} // Layout React.Component