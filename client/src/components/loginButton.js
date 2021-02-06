import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { loginUser } from '../redux/ActionCreator';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const responseGoogle = (response) => {
      var profile = response.profileObj;
      console.log(profile);
      this.props.dispatch(loginUser(profile));
    };
    return (
      <div>
        <GoogleLogin
          clientId='121327610127-klunl6r5qs78nl6ptfl3dgtc0okl0qq6.apps.googleusercontent.com'
          buttonText='Login with Google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        ></GoogleLogin>
      </div>
    );
  }
}

export default connect()(Login);
