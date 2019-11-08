import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class Navbar extends Component{

  handleLogout = ()  => {
    this.props.logoutUser()
  }
    render(){
        return(

            <div className="columns is-mobile is-centered has-text-centered">
              <div className="column">
                <img src={this.props.user.picture} alt="profile" height="100px" width="100px"></img>
              </div>
              <div className="column">
                <h1>{this.props.user.username}</h1>
              </div>
              <div className="column">
                    <button onClick={this.handleLogout}>Log Out</button>
              </div>
            </div>
       )
    }

}
const mapDispatchToProps = {
    persistUserFromAPI: Actions.persistUserFromAPI,
    logoutUser: Actions.logoutUser
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar);