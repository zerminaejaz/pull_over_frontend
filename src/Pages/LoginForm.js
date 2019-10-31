import React, { Component } from 'react';
import Actions from '../Redux/actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleLogInUserToDb=(e, state)=>{
    e.preventDefault()
    this.props.loginUserToDB(state)
  }

  render() {
    return (
      <div>
        <h1> Login</h1>
        <form onSubmit={e => this.handleLogInUserToDb(e, this.state)}>
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
const mapDispatchToProps = {
  loginUserToDB: Actions.loginUserToDB
};
export default connect(
  null,
  mapDispatchToProps
)(LoginForm);