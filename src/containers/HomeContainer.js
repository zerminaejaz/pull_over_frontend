import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import PopupShow from '../components/home_components/PopupShow'
import PosteesInfoContainer from './PosteesInfoContainer';


class HomeContainer extends Component{

    render(){
        return(
            <>
            {/* React Map Component */}
            <PopupShow/>
            <PosteesInfoContainer/>
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
  )(HomeContainer);