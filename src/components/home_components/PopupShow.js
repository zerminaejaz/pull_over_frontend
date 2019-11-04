import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';

class PopupShow extends Component{

    render(){
        return(
            <>
            <p>PopUpShow</p>
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