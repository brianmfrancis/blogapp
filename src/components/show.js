// props.params.id

import React, { Component } from 'react';
// import marked from 'marked';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    if (this.props.post) {
      this.state = {
        isEditing: false,
        title: this.props.post.title,
        tags: this.props.post.tags,
        content: this.props.post.content,
      };
    } else {
      this.state = {
        isEditing: false,
      };
    }
  }

  componentWillMount() {
    this.props.fetchpost(this.props.params.id);
    console.log(this.props.post);
    console.log(this.props.params.id);
  }

  render() {
    if (!this.props.post) {
      return (
        <h3>
          Loading..
        </h3>
      );
    } else {
      return (
        <div>
          <div>
            <div id="title">
              {this.props.post.title}
              <button id="deletebutton" type="button" onClick={() => { this.props.deletePost(this.props.params.id); }}>
                Delete
              </button>
            </div>
            <div id="tags">
              tags: {this.props.post.tags}
              <button id="editbutton" type="button">
                Edit
              </button>
            </div>
            <p id="content">
              {this.props.post.content}
            </p>
          </div>
        </div>

      );
    }
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);


export default connect(mapStateToProps, actions)(Show);
