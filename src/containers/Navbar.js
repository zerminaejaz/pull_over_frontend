import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class Navbar extends Component{

    render(){
        return(
           
            <div className="container navbar is-fluid">
                <div className="columns has-text-centered is-mobile is-centered">
                    <div className="column auto">
                        <img src={`${this.props.user.picture}`} height="50px" width="50px"></img>
                    </div>
                    <div className="column is-half-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                        <p>You are logged In as {this.props.user.username}</p>
                    </div>
                    <div className="column auto">
                        <button onClick={this.handleLogOut}>Log Out</button>
                    </div>
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
    return {user: state}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar);