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
    status: "OPEN",
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
   
      this.setState({
        [event.target.name]: event.target.value.toUpperCase()
      })
 
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.formSwitch()
    this.props.createPost(this.state)
  }


    render(){

      return (<>
        <form onSubmit={this.handleSubmit}>
          
          <div className="control">
          <div className="field">
            <p><label className="status">Status</label>
              </p>
            <br></br>
            <div className="select">
              <select name="status" onChange={(event)=>this.inputChanged(event)}>
                <option value="OPEN">OPEN</option>
                <option value="PENDING">PENDING</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>
            </div>
          </div>

            <label htmlFor="price">Price</label>
            <input className="input" name="price" onChange={this.inputChanged} type="number" value={this.state.price}/>
          </div>
    
          <div className="field">
            <label className="case">Case</label>
            <div className="control">
              <input className="input" name="case" onChange={this.inputChanged} type="text" value={this.state.case}/>
            </div>
          </div>

          <div className="field">
            <label className="description">Description</label>
            <div className="control">
              <input className="input" name="description" onChange={this.inputChanged} type="text" value={this.state.description}/>
            </div>
          </div>
        <br></br>
          {/* <div className="field">
            <p><label className="status">Status</label>
              </p>
            <br></br>
            <div className="select">
              <select name="status" onChange={(event)=>this.inputChanged(event)}>
                <option value="OPEN">OPEN</option>
                <option value="PENDING">PENDING</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>
            </div>
          </div> */}
          <br></br>

          <div className="control is-mobile is-centered has-text-centered">
            <button type="submit" className="button is-light is-rounded">Submit</button>
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