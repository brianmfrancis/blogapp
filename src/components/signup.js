import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class SignUp extends Component {
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

  onUsernameChange(ev) {
    this.setState({
      username: ev.target.value,
    });
  }

  onPasswordChange(ev) {
    this.setState({
      password: ev.target.value,
    });
  }

  onSignup() {
    this.props.signupUser({ email: this.state.username, password: this.state.password });
  }


  render() {
    return (
      <div className="newpost">
        <h3>
          Sign In
        </h3>
        <div>
          <form>
            <input onChange={this.onTitleChange} placeholder="username" value={this.state.username} />
            <input onChange={this.onContentChange} placeholder="password" value={this.state.password} />
            <input type="submit" value="Submit" id="submit" onClick={this.onSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);
