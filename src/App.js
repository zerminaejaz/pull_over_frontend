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
      this.showHomePage()
    }
  }

  showSignupOrLogin = () => {
    return(<><SignupOrLogIn/></>)
  }

  handleLogOut = () => {
    this.props.logoutUser()
  }

  showHomePage = () => {
    return(<>
      <div style={{width:"100vw"}} is-mobile>
            <Navbar/>
            <BodyContainer/>  
      </div>
      </>
      )
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
      <div className="columns" width="100vw" height="100vh">
        <div className="column">
            {this.checkForUser()}
        </div>
      </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  persistUserFromAPI: Actions.persistUserFromAPI,
  logoutUser: Actions.logoutUser,
  fetchUserLocation: Actions.fetchUserLocation 
}

const mapStateToProps = (state)=> {
  return {user: state.user}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);