import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';

class UserProfile extends Component{
  render(){
   return(
   <div height="100px" width="100px">
        <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
            <img src={this.props.clickedUser.picture} alt="profile image"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                <img src={this.props.clickedUser.picture} alt="profile image"/>
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-4">{this.props.clickedUser.name}</p>
                <p className="subtitle is-6">Member since {this.props.clickedUser.created_at}</p>
            </div>
            </div>

            <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. 
            <br/>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
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