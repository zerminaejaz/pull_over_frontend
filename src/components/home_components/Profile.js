import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';

class Profile extends Component{
  render(){
   return(<></>
      )
  }
}
const mapDispatchToProps = {
    createPost: Actions.createPost,
    switchFormOff: Actions.switchFormOff
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
      posts: state.posts,
      post: state.post,
      }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile);