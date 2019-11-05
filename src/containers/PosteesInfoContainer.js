import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class PosteesInfoContainer extends Component{

  renderPostInfo = (post) => {
    return( 
      <div className="post-info">
        <h1>${post.price}</h1>
        <h3>{post.description}</h3>
        <h4>{post.status}</h4>
        <p>@{post.user.username}</p>

      </div>
    )

  }

    render(){
        return(
            <>
            <h1>Post Information</h1>
            {this.props.post? this.renderPostInfo(this.props.post):null}
            </>
        )
    }

}
const mapDispatchToProps = {
    persistUserFromAPI: Actions.persistUserFromAPI,
    logoutUser: Actions.logoutUser
  };
  
  const mapStateToProps = (state)=> {
    return {user: state,
    post: state.post}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PosteesInfoContainer);