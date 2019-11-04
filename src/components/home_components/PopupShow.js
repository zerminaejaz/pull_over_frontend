import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';
import Post from './Post';

class PopupShow extends Component{

    render(){
        return(
            <>
            <Post/>
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
  )(PopupShow);