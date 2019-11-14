import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import PosteesInfoContainer from './PosteesInfoContainer';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import PostForm from '../components/home_components/PostForm';
import EditForm from '../components/home_components/EditForm';


class HomeContainer extends Component{
  
  state = {
    viewport: {
      width: "90vw",
      height: "30vh",
      latitude: 40.700819,
      longitude: -73.987667,
      zoom: 15
    },
    clickedPost: null,
    formSwitch: false,
    editFormSwitch: false,
    // posts: []
  };

  //LifeCycles
  componentDidMount = () => {
    this.checkLocation()
    this.props.getPosts()
  }

  //helper methods
  checkLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          viewport:{
            ...this.state.viewport,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        }) 
      })
    }
      else {
      console.log("Location not available")
    }
  }

  createPost = () => {
   this.setState({
     formSwitch: true,
     editFormSwitch:false,
     clickedPost:null
   })
  }

  deletePost = (post) => {
    let newArray = this.props.posts.filter(postObj => postObj.id !== post.id) //squiggly brackets you have to return
    this.setState({
      clickedPost: null,
      editFormSwitch: false
    })
    this.props.deletePost(post, newArray)

  }

  editFormSwitch = () => {
    this.setState({
      editFormSwitch: !this.state.editFormSwitch
    })
  }

  formSwitch  = () => {
    this.setState({
      formSwitch: !this.state.formSwitch
    })
  }

  clearClickedPost = () => {
    this.setState({
      clickedPost: null
    })
  }

  
  handleMarkerClick = (post) => {
    this.setState({
      formSwitch: false,
      editFormSwitch:false,
      clickedPost: post
    })
    
  }

  updatePostInState = (post) => {
    if(post.status !== "COMPLETED"){
      this.setState({
        clickedPost: post
      })
    }
    this.editFormSwitch()
  }

  setPosts = () => {
    let newArray = this.props.getPosts()
    this.setState({
      posts: newArray
    })
  }

  renderEditForm = () => {
    return(
      <EditForm post = {this.state.clickedPost} clearClickedPost = {this.clearClickedPost} updatePostInState={this.updatePostInState} editFormSwitch={this.editFormSwitch} user={this.props.user} />
    )
  }

  renderForm = () => {
    return(<><PostForm latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} formSwitch={this.formSwitch} setPosts = {this.setPosts} /></>)
  }

  markerImageSelector = (post) => {
    switch(post.case){
      case "POLICE":
        return "https://img.icons8.com/dusk/452/policeman-male.png"
      case "CAR":
        return "https://cdn4.iconfinder.com/data/icons/car-service-cartoon/512/g24933-512.png"
      default:
        return "http://www.pngall.com/wp-content/uploads/2017/05/Alert-Download-PNG.png"
    }
  }

  renderMarker = (post) => {
      return(
        <Marker
        key={post.id}
        latitude={parseFloat(post.latitude)}
        longitude={parseFloat(post.longitude)}
      >
          <img onClick={()=> this.handleMarkerClick(post)} src={this.markerImageSelector(post)} height="50px" width="50px" alt="marker"></img>
      </Marker>
      )
  }

  setView = r => {
    this.setState({ viewport: r })
  }

    render(){
        return(
            <div height="60vh">
            <div className="columns is-mobile is-centered has-text-centered" >
              <div className="column has-text-centered is-centered map">
              {<ReactMapGL
                {...this.state.viewport} onViewportChange={this.setView} 
                mapStyle="mapbox://styles/zerminaejaz/ck2ktos920sdj1cpevbj0izw3" mapboxApiAccessToken="pk.eyJ1IjoiemVybWluYWVqYXoiLCJhIjoiY2sya3FyamY1MDI0azNubXhkdmx5cWE1ayJ9.-DVnbN3fa15LLSBxYZBAGg">
                  {this.props.posts && this.props.posts.length > 0?
                    this.props.posts.map(post => {
                      if(post.latitude && post.longitude && (post.status === "PENDING" || post.status === "OPEN"))
                        return this.renderMarker(post)
                    })
                    : null
                  }
              </ReactMapGL>}
              </div>
            </div>
            <div className="columns is-mobile is-centered has-text-centered">
              <div className="column">
                  <button className="button is-link" onClick={this.createPost}>Create Post</button>
              </div>
            </div>

            <div className = "columns is-mobile is-centered has-text-centered" >
              <div className = "column">
                {this.state.formSwitch ? this.renderForm() : this.state.clickedPost ? 
                <PosteesInfoContainer key={this.state.clickedPost} editFormSwitch={this.editFormSwitch} clickedPost={this.state.clickedPost} deletePost={this.deletePost}/> : null}
              {this.state.editFormSwitch? this.renderEditForm():null}
              </div>
            </div>
            </div>
        )
    }
}
const mapDispatchToProps = {
    persistUserFromAPI: Actions.persistUserFromAPI,
    logoutUser: Actions.logoutUser,
    getPosts: Actions.getPosts,
    sendPost: Actions.sendPost,
    clearPost: Actions.clearPost,
    deletePost: Actions.deletePost,
    switchFormOn: Actions.switchFormOn,
    switchFormOff: Actions.switchFormOff,
    fetchUserLocation: Actions.fetchUserLocation
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
      posts: state.posts,
      post: state.post,
      formSwitch: state.formSwitch,
      location: state.location
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContainer);