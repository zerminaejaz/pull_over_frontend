import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
// import PopupShow from '../components/home_components/PopupShow';
import PosteesInfoContainer from './PosteesInfoContainer';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import PostForm from '../components/home_components/PostForm';


class HomeContainer extends Component{
  
  state = {
    viewport: {
      width: "100vw",
      height: "40vh",
      latitude: 40.700819,
      longitude: -73.987667,
      zoom: 15
    },
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
    return this.props.clearPost()
  }

  createMarkers = (array) => {
    return(
      array.map(post => {
        return(
        <Marker key={post.id} longitude={parseFloat(post.longitude)} latitude={parseFloat(post.latitude)}>
          <img onClick={()=>{this.handleSelectedPost(post)}} src="https://cdn4.iconfinder.com/data/icons/car-service-cartoon/512/g24933-512.png" height="50px" width="50px" alt="marker"></img>
          {/* {this.props.post ? this.renderPopUp():null} */}
        </Marker>
        )
      })
    )
  }

  createPost = () => {
   this.props.switchFormOn()
  }

  handleSelectedPost = (post) => {
    this.props.switchFormOff()
    this.props.sendPost(post)
  }

  renderForm = () => {
    return(<><PostForm/></>)
  }

  setView = r => {
    this.setState({ viewport: r })
  }

  showMap = () => {
    return(
    <ReactMapGL {...this.state.viewport} onViewportChange={this.setView} 
    mapStyle="mapbox://styles/zerminaejaz/ck2ktos920sdj1cpevbj0izw3" mapboxApiAccessToken="pk.eyJ1IjoiemVybWluYWVqYXoiLCJhIjoiY2sya3FyamY1MDI0azNubXhkdmx5cWE1ayJ9.-DVnbN3fa15LLSBxYZBAGg">
        {this.createMarkers(this.props.posts)}
    </ReactMapGL>
    )
  }

  renderPopUp = () =>{
    return(<Popup
      latitude={parseFloat(this.props.post.latitude)}
      longitude={parseFloat(this.props.post.longitude)}
      onClose={this.closePopup}>
      <p>{this.props.post.price}</p>
    </Popup>)
  }

    render(){
        return(
            <>
            {this.checkLocation()}
            <br></br><br></br>
            <div className="columns has-text-centered is-full is-mobile is-centered">
              <div className="column">
                {this.props.posts ? this.showMap() : null}
              </div>
            </div>
            <div className="columns has-text-centered is-mobile is-centered">
              <div className="column">
                  <button className="button is-link" onClick={this.createPost}>Create Post</button>
                </div>
            </div>
            <div className="columns has-text-centered is-mobile is-centered">
              <div className="column">
                {this.props.formSwitch? this.renderForm(): <PosteesInfoContainer/>}
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