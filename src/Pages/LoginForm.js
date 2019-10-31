import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h1> Login</h1>
        <form onSubmit={e => this.props.handleSubmit(e, this.state)}>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}