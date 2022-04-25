import React from "react";

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
                    Right Side
                    <form className='signup-form' onSubmit={this.handleSubmit}>
                        <h3>Sign up for StockMania</h3>
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
                        <input
                        className="signup-form-password-input"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.update("password")}
                        />
                        <input
                        className="signup-form-email-input"
                        type="text"
                        value={email}
                        placeholder="Email address"
                        onChange={this.update("email")}
                        />
                        <button type='submit'>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignupForm;