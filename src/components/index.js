import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class Index extends Component { /* stuff */

  constructor(props) {
    super(props);
    // init component state here
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchposts();
  }

  // loadAuthor(post) {
  //   if (post.username === undefined) {
  //     // author = '';
  //     return 'Author: ';
  //   } else {
  //     return `Author: ${post.username}`;
  //   }
  // }

  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          // const author = this.loadAuthor(post);
          // console.log(post);
          return (
            <li id="postlist" key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
              <Link to={`/posts/${post.id}`}>
                {post.tags}
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);


export default connect(mapStateToProps,
  actions)(Index);
