import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <form className="section">
        <div className="container">
          <h3 className="grey-text text-darken-4">Login</h3>
          <div className="input-field">
            <input type="email" id="email" autoComplete="new-email" />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input type="password" id="password" autoComplete="new-password" />
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-field">
            <button type="submit" class="btn">Login</button>
          </div>

          <div>
            <p>Don't have an account? Click <NavLink to="/signup">here</NavLink> to sign up.</p>
          </div>
        </div>
      </form>
    )
  }
}

export default LogIn
