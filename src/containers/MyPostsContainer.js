import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import Post from '../components/home_components/Post';

class MyPostsContainer extends Component{

    state = {
        posts:[]
    }

    componentDidMount = () => {
        this.setState({
            posts: this.props.user.posts
        })

    }

    showPosts = () => {
        let sortedArray = this.state.posts.sort((a, b) => this.formatDate(b.created_at) - this.formatDate(a.created_at))
        return sortedArray.map(post=> {
            return( <Post key={post.id} post={post}/>)
            })    
    }


    //format number
    //2019-11-13T22:21:20.525Z
    formatDate = (dateString)=> {
        let dateSeperatedByDashArray = dateString.split("-")
        let year = dateSeperatedByDashArray[0]
        let month = dateSeperatedByDashArray[1]
        let indexOfT= dateSeperatedByDashArray[2].indexOf("T")
        let date = dateSeperatedByDashArray[2].substring(0, indexOfT)
        let newDate = `${month}${date}${year}`


        let fullTimeArray = dateString.substring(dateString.indexOf("T")+1, dateString.length)
        let normalTime = fullTimeArray.split(":")
        let hour = normalTime[0]
        let minute = normalTime[1]
        let seconds = normalTime[2]
        let indexOfMilliseconds = seconds.indexOf(".")
        seconds = seconds.substring(0,indexOfMilliseconds)
        let time = `${hour}${minute}${seconds}`
        let finalDateValue = `${newDate}${time}`
    
        return parseInt(finalDateValue)
      }

    showEmptyPosts = () => {
        return(
        <div>
            <article className="message is-danger" style={{margin:"100px"}}>
            <div className="message-header">
                <p>No Posts</p>
            </div>
            <div className="message-body">
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
    changePageTo: Actions.changePageTo
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
        posts: state.posts,
      pageToRender: state.pageToRender}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyPostsContainer);