import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  render() {
    return (
      <form className="container white">
        <div className="container section">
          <h3 className="grey-text text-darken-4">Create Account</h3>
          <div className="input-field">
            <input type="email" id="email" autoComplete="new-email" />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input type="text" id="firstName" autoComplete="new-firstName" />
            <label htmlFor="firstName">First Name</label>
          </div>

          <div className="input-field">
            <input type="text" id="lastName" autoComplete="new-lastName" />
            <label htmlFor="lastName">Last Name</label>
          </div>

          <div className="input-field">
            <input type="password" id="password" autoComplete="new-password" />
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-field">
            <button type="submit" class="btn">Signup</button>
          </div>
          <div>
            <p>Have an account? Click <NavLink to="/login">here</NavLink> to login.</p>
          </div>
        </div>
      </form>
    )
  }
}

export default SignUp
