import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';
import EditForm from './EditForm';

class Post extends Component{

  // state = {
  //   editFormSwitch: false,
  //   clickedPost:null
  // }

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

  formatDate = (dateString)=> {
    let dateSeperatedByDashArray = dateString.split("-")
    let year = dateSeperatedByDashArray[0]
    let month = dateSeperatedByDashArray[1]
    let indexOfT= dateSeperatedByDashArray[2].indexOf("T")
    let date = dateSeperatedByDashArray[2].substring(0, indexOfT)
    let newDate = `${month}-${date}-${year}`
    return newDate
  }

    render(){
        return(<>
        <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {this.formatDate(this.props.post.created_at)}
              </p>
              <p class="card-header-title">
                {this.returnStyledStatus(this.props.post.status)}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>${this.props.post.price}</p>
                <p>CASE: {this.props.post.case}</p>
                <p>{this.props.post.description}</p>
                <br/>
              </div>
            </div>
          </div>
      </>)
    }

}
const mapDispatchToProps = {
    persistUserFromAPI: Actions.persistUserFromAPI,
    logoutUser: Actions.logoutUser
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Post);