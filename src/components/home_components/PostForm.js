import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';
import "./components.css"

class PostForm extends Component{

  state = {
    user_id: null,
    price: 0,
    description: "",
    case: "",
    status: "",
    latitude: "",
    longitude: ""
  }

  componentDidMount = () => {

    this.setState({
      latitude: this.props.latitude.toString(),
      longitude: this.props.longitude.toString(),
      user_id: this.props.user.id
    })
  }

  checkLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }) 
      })
    }
      else {
      console.log("Location not available")
    }
  }

  updatePost = (post) => {
    this.props.updatePost(post)
  }

  inputChanged = (event) => {
    if(event.target.name === "status"){
      this.setState({
        [event.target.name]: event.target.value.toUpperCase()
      })
    }
    else{
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.formSwitch()
    debugger
    this.props.createPost(this.state)
    this.props.setPosts()
    // this.props.addPost(this.props.post) //get the object after creation
  }


    render(){

      console.log("We are:", this.state.user_id)
      return (<>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="price">Price</label>
          <div className="control">
            <input className="input" name="price" onChange={this.inputChanged} type="number" value={this.state.price}/>
          </div>
    
          <div className="field">
            <label className="description">Description</label>
            <div className="control">
              <input className="input" name="description" onChange={this.inputChanged} type="text" value={this.state.description}/>
            </div>
          </div>

          <div className="field">
            <label className="case">Case</label>
            <div className="control">
              <input className="input" name="case" onChange={this.inputChanged} type="text" value={this.state.case}/>
            </div>
          </div>

          <div className="field">
            <label className="status">Status</label>
            <div className="control">
              <input className="input" name="status" onChange={this.inputChanged} type="text" value={this.state.status}/>
            </div>
          </div>


          <div className="control is-centered">
            <button type="submit" className="button is-primary">Submit</button>
          </div>
      </form>
      </>
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
  )(PostForm);