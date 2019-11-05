import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';

class Post extends Component{

    render(){
        return(<>
      </>)
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
  )(Post);