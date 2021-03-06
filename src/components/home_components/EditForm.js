import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';
import "./components.css"

class EditForm extends Component{

  state = {
    user: this.props.user,
    price: this.props.post.price,
    description: this.props.post.description,
    case: this.props.post.case,
    status: this.props.post.status,
    latitude: this.props.post.latitude,
    longitude: this.props.post.longitude
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
    if(this.state.status === "COMPLETED"){
      this.props.clearClickedPost()
    }
    this.props.updatePost(this.props.post,this.state)
    // this.props.getPosts()
    this.props.updatePostInState({...this.state, id: this.props.post.id}) //get the post id
  
  }

  setLocationInState = () => { 
    function floatToStr(num) {
      return num.toString().indexOf('.') === -1 ? num.toFixed(1) : num.toString();
    }

   this.setState({
     latitude: floatToStr(this.props.location.latitude),
     longitude: floatToStr(this.props.location.longitude)
   })
  }

  closeEditForm = () => {
    this.props.editFormSwitch()
  }

    render(){
      return (<>
      <div style={{padding: "50px"}}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="price">Price</label>
          <div className="control">
            <input className="input" name="price" onChange={this.inputChanged} type="number" value={this.state.price}/>
          </div>
    
          {/* <div className="field">
            <label className="case">Case</label>
            <div className="control">
              <input className="input" name="case" onChange={this.inputChanged} type="text" value={this.state.case}/>
            </div>
          </div> */}

          <div className="field">
            <label className="description">Description</label>
            <div className="control">
              <input className="input" name="description" onChange={this.inputChanged} type="text" value={this.state.description}/>
            </div>
          </div>

          {/* <div className="field">
            <label className="status">Status [open, pending, completed]</label>
            <div className="control">
              <input className="input" name="status" onChange={this.inputChanged} type="text" value={this.state.status}/>
            </div>
          </div> */}

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

          <div className="field">
            <p><label className="case">Case</label>
              </p>
            <br></br>
            <div className="select">
              <select name="case" onChange={(event)=>this.inputChanged(event)}>
                <option value="CAR">CAR</option>
                <option value="POLICE">POLICE</option>
                <option value="ETC">ETC</option>
              </select>
            </div>
          </div>


          <div className="control is-centered">
            <button type="submit" className="button is-primary">Submit</button>
            <button onClick={this.closeEditForm} className="button is-danger">Close</button>
          </div>
      </form>
      </div>
      </>
      )
    }
}
const mapDispatchToProps = {
    updatePost: Actions.updatePost,
    getPosts: Actions.getPosts
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditForm);