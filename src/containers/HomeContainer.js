import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import PopupShow from '../components/home_components/PopupShow';
import PosteesInfoContainer from './PosteesInfoContainer';
import ReactMapGL, {Marker} from 'react-map-gl';


class HomeContainer extends Component{
  
  state = {
    viewport: {
      width: "50vh",
      height: "50vh",
      latitude: 40.700819,
      longitude: -73.987667,
      zoom: 16
    }
  };

  //get posts
  componentDidMount = () => {
    this.props.getPosts()
    console.log("Posts DidMount:", this.props.posts )

  }


  setUserLocation = (coords) => {
    if(coords){
      this.setState({
        longitude: coords.latitude,
        latitude: coords.longitude
      })
    }
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
        <Marker key={post.id} longitude={parseFloat(post.longitude, 10)} latitude={parseFloat(post.latitude)}></Marker>
        )
      })
    )
  }

    render(){
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(()=>function(position) {
          console.log("Location: ", position.coords)
          this.setUserLocation(position.coords);
        });
      } else {
        console.log("Location not available")
      }

        return(
            <>
            <br></br><br></br>
            <div className="columns has-text-centered is-mobile is-centered">
              <div className="column auto">
                {console.log("Before Posts: ", this.props.post)}
                {this.props.posts ? this.showMap():null}
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
    getPosts: Actions.getPosts
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
    posts: state.posts}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContainer);