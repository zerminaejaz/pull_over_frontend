import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import PopupShow from '../components/home_components/PopupShow';
import PosteesInfoContainer from './PosteesInfoContainer';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';


class HomeContainer extends Component{
  
  state = {
    viewport: {
      width: "50vw",
      height: "50vh",
      latitude: 40.700819,
      longitude: -73.987667,
      zoom: 16
    }
  };

  //get posts
  componentDidMount = () => {
    this.props.getPosts()

  }

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

  handleClickedPost = (e) => {
    e.preventDefault()
    console.log("Event: ", e.target)
  }

  setView = r => {
    this.setState({ viewport: r })
  }

  showMap = () => {
    return(
    <ReactMapGL {...this.state.viewport} onViewportChange={this.setView} mapStyle="mapbox://styles/zerminaejaz/ck2ktos920sdj1cpevbj0izw3"mapboxApiAccessToken="pk.eyJ1IjoiemVybWluYWVqYXoiLCJhIjoiY2sya3FyamY1MDI0azNubXhkdmx5cWE1ayJ9.-DVnbN3fa15LLSBxYZBAGg">
        {this.createMarkers(this.props.posts)}
    </ReactMapGL>
    )
  }

  createMarkers = (array) => {
    return(
      array.map(post => {
        return(
        <Marker key={post.id} longitude={parseFloat(post.longitude, 10)} latitude={parseFloat(post.latitude)}>
          <button className="marker-btn" onClick={(e)=>{this.handleClickedPost()}}><img src="https://cdn4.iconfinder.com/data/icons/car-service-cartoon/512/g24933-512.png" height="50px" width="50px"></img></button>
        </Marker>
        )
      })
    )
  }

    render(){
        return(
            <>
            {this.checkLocation()}
            <br></br><br></br>
            <div className="columns has-text-centered is-mobile is-centered">
              <div className="column auto">
                {this.props.posts ? this.showMap() : null}
              </div>
              <div className="column auto">
                <PopupShow/>
                <PosteesInfoContainer/>
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
    sendPost: Actions.sendPost
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
      posts: state.posts,
      post: state.post}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContainer);