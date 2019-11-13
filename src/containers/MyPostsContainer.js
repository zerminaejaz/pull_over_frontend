import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import Post from '../components/home_components/Post';

class MyPostsContainer extends Component{

    sortPosts = () => {
        let sortedArray = this.props.user.posts.sort((a, b) => b.created_at - a.created_at)
        return sortedArray
    }
  
    render(){
        return(<>
        {this.sortPosts().map(post=> {
            return( <Post key={post.id} post={post}/>)
            })    
        } 
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
  )(MyPostsContainer);