import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';

class UserProfile extends Component{

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
   return(
    <div className="columns">
      <div className="column is-one-third">   
      </div>
      <div className="column is-one-third">   
        <div height="100px" width="100px" style={{margin:"15%"}}>
              <div className="card">
              <div className="card-image">
                  <figure className="image is-2by2">
                  <img src={this.props.clickedUser.picture} alt="profile image"/>
                  </figure>
              </div>
              <div className="card-content">
                  <div className="media">
                  <div className="media-left">
                  </div>
                  <div className="media-content">
                      <p className="title is-4">{this.props.clickedUser.first_name} {this.props.clickedUser.last_name}</p>
                      <p className="subtitle is-6">@{this.props.clickedUser.username}</p>
                  </div>
                  </div>
                  <div className="content">
                  Member since {this.formatDate(this.props.clickedUser.created_at)}
                  <br/>
                  </div>
              </div>
              </div>
        </div>
      </div>
      <div className="column is-one-third">   
      </div>
   </div>
)
  }
}

  const mapStateToProps = (state)=> {
    return {clickedUser: state.clickedUser
      }
  }
  
  export default connect(
    mapStateToProps,
    null
  )(UserProfile);