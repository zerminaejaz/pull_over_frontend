import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';

class PostForm extends Component{
    render(){
        return(<></>)
    }
}

const mapDispatchToProps = {
    createPost: Actions.createPost,
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
      posts: state.posts,
      post: state.post}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostForm);