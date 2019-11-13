import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import HomeContainer from './HomeContainer'
import Profile from '../components/home_components/Profile';
import MyPostsContainer from './MyPostsContainer';
import MyReviewsContainer from './MyReviewsContainer';
import UserProfile from '../components/home_components/UserProfile';

class BodyContainer extends Component{


  checkWhichPageToRender = () => {
    if(this.props.pageToRender === "HomeContainer")
      return(<HomeContainer/>)
    else if(this.props.pageToRender === "MyPostsContainer")
      return (<MyPostsContainer/>)
    else if(this.props.pageToRender === "MyReviewsContainer")
      return(<MyReviewsContainer/>)
    else if(this.props.pageToRender === "MyReviewsContainer")
      return(<Profile/>)
    else if(this.props.pageToRender === "UserProfile")
      return(<UserProfile/>)
    else  
      return(<HomeContainer/>)
  }

    render(){
        return(
            <>
              <div className="columns" style={{marginLeft: "3%", marginTop: "2%"}}>
                <div className="column is-centered has-text-centered is-full">
                 {this.checkWhichPageToRender()}
                </div>
              </div>
            </>
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
  )(BodyContainer);