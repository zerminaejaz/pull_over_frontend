import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';

class PostForm extends Component{

  state = {
    user:this.props.user,
    price: 0,
    description: "",
    case: "",
    car: "",
    status: "",
    latitude: "",
    longitude: ""
  }

  updatePost = (post) => {
    this.props.updatePost(post)
  }

  inputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updatePost(this.state)
    this.props.switchFormOff()
  }

  setLocationInState = (location) => { 
    function floatToStr(num) {
      return num.toString().indexOf('.') === -1 ? num.toFixed(1) : num.toString();
    }

   this.setState({
     latitude: floatToStr(location.latitude),
     longitude: floatToStr(location.longitude)
   })
    
  }

    render(){
      return (<>
      { !this.props.location ? this.setLocationInState(this.props.location): null}
        <form>
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
            <label className="car">Car</label>
            <div className="control">
              <input className="input" name="car" onChange={this.inputChanged} type="text" value={this.state.car}/>
            </div>
          </div>

          <div className="field">
            <label className="status">Status</label>
            <div className="control">
              <input className="input" name="status" onChange={this.inputChanged} type="text" value={this.state.status}/>
            </div>
          </div>

          <div className="field">
            <label className="longitude">Longitude</label>
            <div className="control">
              <input className="input" name="longitude" onChange={this.inputChanged} type="text" value={this.state.longitude}/>
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
    updatePost: Actions.updatePost,
    switchFormOff: Actions.switchFormOff
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
      posts: state.posts,
      post: state.post,
      location: state.location}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostForm);