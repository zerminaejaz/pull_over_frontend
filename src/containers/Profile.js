import React, { Component} from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import "./components.css"

class Profile extends Component{

  inputChanged = (event) => {

    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createNewUserToDB(this.state)
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
            <label className="status">Status [OPEN, PENDING, COMPLETE]</label>
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
    createNewUserToDB: Actions.createNewUserToDB
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile);