import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import PostForm from '../components/home_components/PostForm';

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
        <a href="#" onClick={()=>this.switchOnFormAndEdit(post)} className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
    </>
    :
    <>
        <a href="#" className="card-footer-item">Help Driver</a>
    </>
    )
  }


  renderPostForm = (post) =>{
    return(<><PostForm/></>)
  }

  switchOnFormAndEdit = (post) => {
    // switchForm()
    
  }

    render(){
        return(
            <>
            {this.props.post? 
            <div className="card">
            <header className="card-header">
            <p className="card-header-title">
              {this.returnStyledStatus(this.props.post.status)}
              </p>
              <p className="card-header-title">
                ${this.props.post.price}
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
                  {this.props.post.description}
                </p>
                <a href="#">@{this.props.post.user.username}</a>
                <br></br>
              </div>
            </div>
            <footer className="card-footer">
              {this.givePermissions(this.props.post)}
            </footer>
              </div>          
              :null}
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