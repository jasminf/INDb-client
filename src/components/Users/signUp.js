import React, {Component} from 'react'
import {registerUser} from "../apiRequests";


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container_signup">
        <form className="cyan lighten-5" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-green darken-1">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='first_name' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='last_name' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn green darken-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp