import React, { Component } from 'react';
import Form from './Pages/Form';
import LoginForm from './Pages/LoginForm';
import { connect } from 'react-redux';
import Actions from './Redux/actions';
import BodyContainer from './containers/BodyContainer'

class App extends Component {
  
  componentDidMount() {
    if (localStorage.token) {
      this.props.persistUserFromAPI();
    }
  }

  showLogInSignUpContainer = () => {
    return (
      <>
        <Form />
        <LoginForm />
      </>
    )
  }

  handleLogOut = () => {
    console.log("Clicked log out")
    this.props.logoutUser()

  }

  showHomePage = () => {
    return(<>
    {/* <Navbar/> */}
    <h1>You are logged In!</h1>
      <button onClick={this.handleLogOut}>Log Out</button>
      <BodyContainer/>
      </>)

  }

  render() {
    return (
      <div>
       {(this.props.user && this.props.user.id) ? this.showHomePage() : this.showLogInSignUpContainer() }
      </div>
    );
  }
}

const mapDispatchToProps = {
  persistUserFromAPI: Actions.persistUserFromAPI,
  logoutUser: Actions.logoutUser
};

const mapStateToProps = (state)=> {
  return {user: state}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);