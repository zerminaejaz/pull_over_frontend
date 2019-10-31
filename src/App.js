import React, { Component } from 'react';
import Form from './Pages/Form';
import LoginForm from './Pages/LoginForm';
import { connect } from 'react-redux';
import Actions from './Redux/actions';
class App extends Component {
  componentDidMount() {
    if (localStorage.token) {
      this.props.persistUserFromAPI();
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.user ? this.props.user.username : ''}</h1>
        <Form />
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({ stateObj: state });

const mapDispatchToProps = {
  persistUserFromAPI: Actions.persistUserFromAPI
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);