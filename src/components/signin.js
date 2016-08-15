import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignin = this.onSignin.bind(this);
  }

  onUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSignin(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.signinUser({ email: this.state.username, password: this.state.password });
  }

  render() {
    return (
      <div className="newpost">
        <h3>
          Sign In
        </h3>
        <div>
          <form>
            <input onChange={this.onUsernameChange} placeholder="username" value={this.state.username} />
            <input type="password" onChange={this.onPasswordChange} placeholder="password" value={this.state.password} />
            <input type="submit" value="Submit" id="submit" onClick={this.onSignin} />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);
