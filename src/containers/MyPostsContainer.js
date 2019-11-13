import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import Post from '../components/home_components/Post';

class MyPostsContainer extends Component{

    showPosts = () => {
        let sortedArray = this.props.user.posts.sort((a, b) => b.created_at - a.created_at)
        return sortedArray.map(post=> {
            return( <Post key={post.id} post={post}/>)
            })    
    }

    showEmptyPosts = () => {
        return(
        <div>
            <article class="message is-info">
            <div class="message-header">
                <p>No Posts</p>
            </div>
            <div class="message-body">
                You have <strong>no posts</strong> to display. Create a post to view your posts
            </div>
            </article>
        </div>
        )
    }
  
    render(){
        return(<>
        {this.props.user.posts && this.props.user.posts.length > 0? this.showPosts():this.showEmptyPosts()} 
        
        
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