import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      username: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }

  onUsernameChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSignup(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log(this.state);
    console.log('on submit');
    this.props.signupUser({ email: this.state.email, password: this.state.password, username: this.state.email });
  }


  render() {
    return (
      <div className="newpost">
        <h3>
          Sign Up
        </h3>
        <div>
          <form>
            <input onChange={this.onUsernameChange} placeholder="username" value={this.state.email} />
            <input type="password" onChange={this.onPasswordChange} placeholder="password" value={this.state.password} />
            <input type="submit" value="Submit" id="submit" onClick={this.onSignup} />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);
