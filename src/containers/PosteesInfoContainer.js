import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/home_components/PostForm';
import Actions from '../Redux/actions';


class PosteesInfoContainer extends Component{


  returnStyledStatus = (status) => {
    let formattedStatus = status.toUpperCase()
    switch(formattedStatus){
      case "OPEN" :
        return(<font color="green">{formattedStatus}</font>)
      case "COMPLETED":
          return(<font color="red">{formattedStatus}</font>)
      case "PENDING":
          return(<font color="orange">{formattedStatus}</font>)
      default:
          return(<font color="blue">{formattedStatus}</font>)
    }
  }

  handleDeletePost = (post) => {
    this.props.deletePost(post)
  }

  givePermissions = (post) => {
   
    return(this.props.user.id === post.user.id? 
      <>
        <button onClick={()=>this.props.editFormSwitch()}  className="card-footer-item" style={{color:"orange"}}>Edit</button>
        <button onClick={()=>this.handleDeletePost(post)}className="card-footer-item" style={{color:"red"}}>Delete</button>
    </>
    :
    <>
        <button className="card-footer-item" style={{color:"green"}}>Help Driver</button>
    </>
    )
  }


  // renderPostForm = (post) =>{
  //   return(<><PostForm/></>)
  // }


    render(){
        return(
            <>
            <div className="card">
            <header className="card-header">
            <p className="card-header-title">
              {this.returnStyledStatus(this.props.clickedPost.status)}
              </p>
              <p className="card-header-title">
                ${this.props.clickedPost.price}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <p>
                  {this.props.clickedPost.description}
                </p>
                <a >@{this.props.clickedPost.user.username}</a>
                <br></br>
              </div>
            </div>
            <footer className="card-footer">
              {this.givePermissions(this.props.clickedPost)}
            </footer>
              </div>          
            </>
        )
            }
}



  const mapStateToProps = (state)=> {
    return {user: state.user,
    post: state.post}
  }
  
  export default connect(
    mapStateToProps,
    null,
  )(PosteesInfoContainer);



 //if the post is the clicked post && switch === true 