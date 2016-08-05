// props.params.id

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Show extends Component {
  constructor(props) {
    super(props);

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
    this.onSubmit = this.onSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchpost(this.props.params.id);
    console.log(this.props.post);
    console.log(this.props.params.id);
    console.log(this.state);
  }

  onEdit() {
    console.log('clicked edit');
    this.setState({ isEditing: !this.state.isEditing, title: this.props.post.title, tags: this.props.post.tags, content: this.props.post.content });
  }

  onTitleChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
    console.log(event.target.value);
  }

  onTagChange(event) {
    event.preventDefault();
    this.setState({ tags: event.target.value });
    console.log(event.target.value);
  }

  onContentChange(event) {
    event.preventDefault();
    this.setState({ content: event.target.value });
    console.log(event.target.value);
  }

  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log('clicked submit');
    this.props.updatePost(this.props.params.id, { title: this.state.title, tags: this.state.tags, content: this.state.content });
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    if (!this.props.post) {
      return (
        <h3>
          Loading..
        </h3>
      );
    } else if (this.state.isEditing) {
      return (
        // from dragable site
        <form>

          TITLE
          <input onChange={this.onTitleChange} placeholder="enter a title" value={this.state.title} />

          TAGS
          <input onChange={this.onTagChange} placeholder="enter tags" value={this.state.tags} />

          CONTENT
          <input onChange={this.onContentChange} placeholder="enter content" value={this.state.content} />
          <input type="submit" value="Submit" id="submit" onClick={this.onSubmit} />
        </form>
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
              <button id="editbutton" type="button" onClick={this.onEdit}>
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
