import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { loginUser } from '../redux/ActionCreator';

class Login extends Component {


  render() {
    const responseGoogle = (response) => {
      var profile = response.profileObj;
      this.props.dispatch(loginUser(profile));
    };
	const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    return (
			<div>
				<GoogleLogin
					clientId={GOOGLE_CLIENT_ID}
					render={(renderProps) => (
						<button
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
							className="flex bg-secondary-dark text-primary-light font-bold px-3 py-2  text-xl font-jost hover:text-secondary-dark hover:bg-secondary rounded-full shadow-xl hover:shadow-inner transition ease-in-out duration-300 items-center"
						>
							<img
								src="https://avatars.githubusercontent.com/u/1342004?s=400&v=4"
								className="w-6 h-6 mr-1"
								alt="."
							/>
							Sign in
						</button>
					)}
					buttonText="Login with Google"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
				></GoogleLogin>
			</div>
		);
  }
}

export default connect()(Login);
