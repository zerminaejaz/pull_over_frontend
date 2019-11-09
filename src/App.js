import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from './Redux/actions';
import BodyContainer from './containers/BodyContainer'
import Navbar from './containers/Navbar';
import SignupOrLogIn from './Pages/SignupOrLogIn';

class App extends Component {
  
  componentDidMount() {
    if (localStorage.token) {
      this.props.persistUserFromAPI();
    }
  }

  showSignupOrLogin = () => {
    return(<><SignupOrLogIn/></>)
  }

  handleLogOut = () => {
    console.log("Clicked log out")
    this.props.logoutUser()
  }

  showHomePage = () => {
    return(
      <div className="container is-fluid">
        <div className = "columns is-full"></div>
          <div className="column is-full">
            <Navbar/>
          </div>
          <div className="column is-full">
            <BodyContainer/>  
          </div>
      </div>)
  }

  checkForUser = () => {
    if (this.props.user && this.props.user.id){
      return(this.showHomePage())
    }
    else{
      return(this.showSignupOrLogin())
    }
  }

  render() {
    return (
      <>
      {this.checkForUser()}
      </>
    );
  }
}

const mapDispatchToProps = {
  persistUserFromAPI: Actions.persistUserFromAPI,
  logoutUser: Actions.logoutUser
}

const mapStateToProps = (state)=> {
  return {user: state.user}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);