import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class MyPostsContainer extends Component{
  
    render(){
        return(<><p>My Posts</p></>
        )
    }
}
const mapDispatchToProps = {
    persistUserFromAPI: Actions.persistUserFromAPI,
    logoutUser: Actions.logoutUser,
    changePageTo: Actions.changePageTo
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
      pageToRender: state.pageToRender}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyPostsContainer);