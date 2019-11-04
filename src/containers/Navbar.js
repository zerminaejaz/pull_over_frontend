import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class Navbar extends Component{

    render(){
        return(
           
            <div className="container has-text-centered is-centered navbar is-fluid">
                <div className="columns has-text-centered is-mobile is-centered">
                    <div className="column auto">
                        {/* onclick goes to account with account settings and postings*/}
                         <img src="https://media.tenor.com/images/c674ba98c40f6793eaf10a1356c1c36a/tenor.gif" alt="profile bear"height="100px" width="100px"></img>
                        {/* <img src={`${this.props.user.picture}`} height="50px" width="50px"></img> */}
                    </div>
                    <div className="column auto">
                        <p>{this.props.user.username}</p>
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