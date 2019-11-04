import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import HomeContainer from './HomeContainer'

class BodyContainer extends Component{

    render(){
        return(
            <>
            <HomeContainer/>
            </>
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
  )(BodyContainer);