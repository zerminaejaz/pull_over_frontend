import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class Form extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.createNewUserToDB(this.state);
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1> Signup</h1>
        <form onSubmit={this.handleSubmit}>
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
  createNewUserToDB: Actions.createNewUserToDB
};
export default connect(
  null,
  mapDispatchToProps
)(Form);