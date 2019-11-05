import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class PosteesInfoContainer extends Component{

  returnStyledStatus = (status) => {
    switch(status){
      case "open":
        return(<font color="green">{status.toUpperCase()}</font>)
      case "completed":
          return(<font color="red">{status.toUpperCase()}</font>)
      case "pending":
          return(<font color="orange">{status.toUpperCase()}</font>)
      default:
          return(<font color="blue">{status.toUpperCase()}</font>)
    }
  }

  givePermissions = (post) => {
    return(this.props.user.id === post.id? 
      <>
        <a href="#" className="card-footer-item">Save</a>
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
    </>
    :
    <>
        <a href="#" className="card-footer-item">Help Driver</a>
    </>
    )
  }

  renderPostInfo = (post) => {
    // debugger
    return( 
      <div className="card">
  <header className="card-header">
  <p className="card-header-title">
     {this.returnStyledStatus(post.status)}
    </p>
    <p className="card-header-title">
      ${post.price}
    </p>
    <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div className="card-content">
    <div className="content">
      <p>
        {post.description}
      </p>
      <a href="#">@{post.user.username}</a>
      <br></br>
      <time dateTime="2016-1-1">{post.created_at}</time>
    </div>
  </div>
  <footer className="card-footer">
    {this.givePermissions(post)}
  </footer>
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
    // persistUserFromAPI: Actions.persistUserFromAPI,
    // logoutUser: Actions.logoutUser
  };
  
  const mapStateToProps = (state)=> {
    return {user: state,
    post: state.post}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PosteesInfoContainer);