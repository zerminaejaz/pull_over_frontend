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

  formSubmitted = (event) => {
    event.preventDefault()
    this.props.updatePost(this.state)
  }

    render(){
      
      return (<form onSubmit={ this.formSubmitted }>
        <label htmlFor="price">Price</label>
        <input 
          type="number" 
          onChange={this.inputChanged }
          value={ this.state.price }
          name="price"
           />
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          onChange={ this.inputChanged }
          value={ this.state.description }
          name="description"
           />
        <label htmlFor="case">Case</label>
        <input 
          type="text" 
          onChange={ this.inputChanged }
          value={ this.state.case }
          name="case"
           />
        <label htmlFor="price">Car</label>
        <input 
          type="text" 
          onChange={ this.inputChanged }
          value={ this.state.car }
          name="car"
           />
        <label htmlFor="status">Status</label>
        <input 
          type="text" 
          onChange={ this.inputChanged }
          value={ this.state.status }
          name="status"
           />
        <label htmlFor="latitude">Latitude</label>
        <input 
          type="text" 
          onChange={ this.inputChanged }
          value={ this.state.latitude }
          name="latitude"
           />
        <label htmlFor="longitude">longitude</label>
        <input 
          type="text" 
          onChange={ this.inputChanged }
          value={ this.state.longitude }
          name="longitude"
           />
          <input type="submit" />
      </form>)
    }
}

const mapDispatchToProps = {
    createPost: Actions.createPost,
    updatePost: Actions.updatePost
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user,
      posts: state.posts,
      post: state.post}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostForm);