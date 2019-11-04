import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class PosteesInfoContainer extends Component{

    render(){
        return(
            <>
            <p>PosteesInfoContainer</p>
            </>
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
  )(PosteesInfoContainer);