import { connect } from 'react-redux';
import * as actions from '../actions';
import React, { Component } from 'react';

class New extends Component {

  constructor(props) {
    super(props);
    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  onTitleChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
    console.log(event.target.value);
  }

  onTagsChange(event) {
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
    this.props.createPost({ title: this.state.title, tags: this.state.tags, content: this.state.content });
    console.log(this.state);
    console.log('on submit');
  }


  render() {
    return (
      <div className="newpost">
        <h3>
          Create a new post!
        </h3>
        <div>
          <form>
            <input onChange={this.onTitleChange} placeholder="enter a title" value={this.state.title} />
            <input onChange={this.onTagsChange} placeholder="enter tags" value={this.state.tags} />
            <input onChange={this.onContentChange} placeholder="enter content" value={this.state.content} />
            <input type="submit" value="Submit" id="submit" onClick={this.onSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, actions)(New);
