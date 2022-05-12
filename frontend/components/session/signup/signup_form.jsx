import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newUser = Object.assign({}, this.state);
        this.props.processForm(newUser);
    }

    update(field) {
        return (e) =>
          this.setState({
            [field]: e.currentTarget.value,
        });
    }

    render() {
        const { first_name, last_name, username, email, password } = this.state;
        return(
            <div className='signup-page-main'>
                <div className='signup-page-left'>
                    Left Side
                </div>
                <div className='signup-page-right'>
                    <div className='signup-form-container'>
                        <form className='signup-form' onSubmit={this.handleSubmit}>
                            <div className="signup-form-top">
                                <div className="signup-form-header-container">
                                    <h3>Enter your first and last name as they appear on your government ID.</h3>
                                </div>
                                <div className='names-container'>
                                    <input
                                    className="signup-form-fname-input"
                                    type="text"
                                    value={first_name}
                                    placeholder="First name"
                                    onChange={this.update("first_name")}
                                    />
                                    <input
                                    className="signup-form-lname-input"
                                    type="text"
                                    value={last_name}
                                    placeholder="Last name"
                                    onChange={this.update("last_name")}
                                    />
                                </div>
                                <div className="credentials-container">
                                    <input
                                    className="signup-form-email-input"
                                    type="text"
                                    value={email}
                                    placeholder="Email address"
                                    onChange={this.update("email")}
                                    />
                                    <input
                                    className="signup-form-password-input"
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={this.update("password")}
                                    />
                                </div>
                                <div className="redirect-container">
                                    <p>Already have an account?</p>
                                    <Link className="redirect-login-page" to="/login">
                                        Login to complete your application
                                    </Link>
                                </div>
                            </div>
                            <div className="signup-button-container-container">
                                <div className="signup-button-container" >
                                    <button className="signup-button" type='submit'>
                                      Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignupForm;