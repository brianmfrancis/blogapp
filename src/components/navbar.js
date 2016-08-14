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
    return (
      <div id="nav">
        <Link to="/">Blog Franchise</Link>
        <Link to="/posts/new">New Post</Link>
         if (state.auth.authenticated) {
           <button id="deletebutton" type="button" onClick={this.props.signoutUser}>
            Sign Out
           </button>
        }else {
          <div>
            <Link to="/signin"> <div className="auth-button">Sign In</div> </Link>
            <Link to="/signup"> <div className="auth-button white">Sign Up</div> </Link>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, actions)(Navbar);
