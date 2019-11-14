import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';
import EditAccountForm from '../account_components/EditAccountForm';

class Profile extends Component{

  state = {
    editAccountSwitch: false
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

  handleEditAccount = () => {
    this.editAccountSwitch()
  }

  editAccountSwitch = () => {
    this.setState({
      editAccountSwitch: !this.state.editAccountSwitch
    })
  }


  render(){
    console.log("Profile")
   return(<>
 <div className="columns">
      <div className="column is-one-third">  
          <button className="button is-danger">Delete Account</button>   
      </div>
      <div className="column is-one-third">   
        <div height="50px" width="50px">
              <div className="card">
              <div className="card-image">
                  <figure className="image is-2by2">
                  <img src={this.props.user.picture} alt="profile image"/>
                  </figure>
              </div>
              <div className="card-content">
                  <div className="media">
                  <div className="media-left">
                  </div>
                  <div className="media-content">
                      <p className="title is-4">{this.props.user.first_name} {this.props.user.last_name}</p>
                      <p className="subtitle is-6">@{this.props.user.username}</p>
                      <p className="subtitle is-6">Member since {this.formatDate(this.props.user.created_at)}</p>
                  </div>
                  </div>
                  <div className="content">
                  <button onClick={()=>this.handleEditAccount()} className="button is-link">Edit Account</button>
                  <br/>
                  </div>
              </div>
              </div>
        </div>
      </div>
      <div className="column is-one-third"> 
        {this.state.editAccountSwitch? <EditAccountForm editAccountSwitch={this.editAccountSwitch}/>:null}
      </div>
   </div>
  </>
      )
  }
}
const mapDispatchToProps = {
    createPost: Actions.createPost,
    switchFormOff: Actions.switchFormOff
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user
      }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile);