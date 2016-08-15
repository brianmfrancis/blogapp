import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';


// function based "dumb" component with no state
class Navbar extends Component {
  constructor(props) {
    super(props);
    // init component state here
    this.state = {};
  }
  render() {
    if (this.props.authenticated) {
      return (
        <div id="nav">
          <Link to="/">Blog Franchise</Link>
          <Link to="/posts/new">New Post</Link>
          <button id="deletebutton" type="button" onClick={this.props.signoutUser}>
          Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div id="nav">
          <Link to="/">Blog Franchise</Link>
          <Link to="/posts/new">New Post</Link>
          <div>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      );
    }
  }
}


const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, actions)(Navbar);
