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

    const mappedPosts = posts.map(posts => <li>{posts.post_content}</li>)

    return <div>
      <h1>Posts</h1>
      <ul>{mappedPosts}</ul>
    </div>
  }
}
