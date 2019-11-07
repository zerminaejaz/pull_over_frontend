import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import PosteesInfoContainer from './PosteesInfoContainer';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import PostForm from '../components/home_components/PostForm';


class HomeContainer extends Component{
  
  state = {
    viewport: {
      width: "100vw",
      height: "50vh",
      latitude: 40.700819,
      longitude: -73.987667,
      zoom: 15
    },
    clickedPost: null,
    formSwitch: false
  };

  //LifeCycles
  componentDidMount = () => {
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
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        this.props.setUserLocation(location)
      })
    }
      else {
      console.log("Location not available")
    }
  }

  closePopup = () => {
    console.log("CLose Pop")
    return this.props.clearPost()
  }

  createPost = () => {
   this.setState({
     formSwitch: true
   })
  }

 handleMarkerClick = (post) => {
    this.setState({
      formSwitch: false,
      clickedPost: post
    })
    // console.log("Switch: ", this.state.formSwitch)
  }

  renderForm = () => {
    return(<><PostForm location={this.props.location} /></>)
  }

  renderMarker = (post) => {
      return(
        <Marker
        key={post.id}
        latitude={parseFloat(post.latitude)}
        longitude={parseFloat(post.longitude)}
      >
          <img onClick={()=> this.handleMarkerClick(post)} src="https://cdn4.iconfinder.com/data/icons/car-service-cartoon/512/g24933-512.png" height="50px" width="50px" alt="marker"></img>
      </Marker>
      )
  }

  setView = r => {
    this.setState({ viewport: r })
  }

  showMap = () => {
    return(
      <ReactMapGL
      {...this.state.viewport} onViewportChange={this.setView} 
      mapStyle="mapbox://styles/zerminaejaz/ck2ktos920sdj1cpevbj0izw3" mapboxApiAccessToken="pk.eyJ1IjoiemVybWluYWVqYXoiLCJhIjoiY2sya3FyamY1MDI0azNubXhkdmx5cWE1ayJ9.-DVnbN3fa15LLSBxYZBAGg">
        {this.props.posts.map(post => (
          this.renderMarker(post)
        ))}
        {this.renderPopUp()}
      </ReactMapGL>
    )
  }

  renderPopUp = () =>{
    if (this.props.post) {
    return(           <Popup
        latitude={parseFloat(this.props.post.latitude)}
        longitude={parseFloat(this.props.post.longitude)}
        onClose={() => {
          this.closePopup();
        }}
      >
        <div>
          <h2>${this.props.post.price}</h2>
        </div>
      </Popup>)
    }
    return null
  }

    render(){
        return(
            <>
            {this.checkLocation()}
            {/* <br></br><br></br> */}
            <div className="columns is-mobile is-centered has-text-centered">
              <div className="column">
                {this.props.posts ? this.showMap() : null}
              </div>
            </div>
            <div className="columns is-mobile is-centered has-text-centered">
              <div className="column">
                  <button className="button is-link" onClick={this.createPost}>Create Post</button>
                {this.state.formSwitch ? this.renderForm() : this.state.clickedPost ? <PosteesInfoContainer clickedPost={this.state.clickedPost} formSwitch={this.state.formSwitch}/> : null}
              </div>
              
            </div>
            </>
        )
    }
}
const mapDispatchToProps = {
    persistUserFromAPI: Actions.persistUserFromAPI,
    logoutUser: Actions.logoutUser,
    getPosts: Actions.getPosts,
    sendPost: Actions.sendPost,
    clearPost: Actions.clearPost,
    switchFormOn: Actions.switchFormOn,
    switchFormOff: Actions.switchFormOff,
    setUserLocation: Actions.setUserLocation
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