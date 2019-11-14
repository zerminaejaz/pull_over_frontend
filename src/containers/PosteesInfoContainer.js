import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../components/home_components/PostForm';
import Actions from '../Redux/actions';


class PosteesInfoContainer extends Component{

  state = {
    showLocationLinkSwitch: false,
    link: ""
  }


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
    let newArray = this.props.posts.filter(postObj=>postObj.id !== post.id)
    debugger
    this.props.deletePost(post, newArray)
  }

  helpDriver = (post) => {
    let url = `https://www.google.com/maps/search/?api=1&query=${post.latitude},${post.longitude}`
    this.setState({
      link: url
    })
    this.locationLinkSwitch()
  }

  locationLinkSwitch = () => {
    this.setState({
      showLocationLinkSwitch: !this.state.showLocationLinkSwitch
    })
  }



  givePermissions = (post) => {
    return(this.props.user.id === post.user.id? 
      <>
        <button onClick={()=>this.props.editFormSwitch()}  className="card-footer-item button" style={{color:"orange"}}>Edit</button>
        <button onClick={()=>this.handleDeletePost(post)} className="card-footer-item button" style={{color:"red"}}>Delete</button>
    </>
    :
    <>
        {/* <button onClick={()=>this.helpDriver(post)} className="card-footer-item" style={{color:"green"}}>Help Driver</button> */}
        {this.state.showLocationLinkSwitch? <button className="card-footer-item button"><a href={this.state.link} target="_blank" onClick={()=>this.locationLinkSwitch}>Open in Maps</a> </button>
        :<button onClick={()=>this.helpDriver(post)} className="card-footer-item button" style={{color:"green"}}>Get Location</button>}
    </>
    )
  }

  changePageToUserProfile = (clickedUser, pageName) => {
    this.props.changePageTo("UserProfile")
    this.props.setClickedUser(clickedUser)

  }

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
                <p>Case: {this.props.clickedPost.case}</p>
                <p>
                  {this.props.clickedPost.description}
                </p>
                <a onClick={()=>this.changePageToUserProfile(this.props.clickedPost.user,"UserProfile")}><i className="far fa-address-card"></i> <p>@{this.props.clickedPost.user.username}
                  </p></a>
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


const mapDispatchToProps = {
  changePageTo: Actions.changePageTo,
  setClickedUser: Actions.setClickedUser,
  updatePost: Actions.updatePost,
  deletePost: Actions.deletePost
}

  const mapStateToProps = (state)=> {
    return {user: state.user,
      post: state.post,
      posts: state.posts}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PosteesInfoContainer);



 //if the post is the clicked post && switch === true 