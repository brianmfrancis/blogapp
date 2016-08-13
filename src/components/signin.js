import React from 'react';
import { signinUser } from '../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignin = this.onSignin.bind(this);
    this.onCancel = this.onCancel.bind(this);
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

  onSignin() {
    this.props.signinUser({ email: this.state.username, password: this.state.password });
  }

  onCancel() {
    browserHistory.push('/');
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

export default connect(null, { signinUser })(SignIn);
