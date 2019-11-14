import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/actions';

class EditAccountForm extends Component{

  state = {
    username: this.props.user.username,
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    number: this.props.user.number,
    picture: this.props.user.picture
  }


  inputChanged = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.editAccountSwitch()
    this.props.updateUser(this.props.user,this.state)
  }

    render(){
      return (<>
      <div style={{padding: "50px"}}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <div className="control">
            <input className="input" name="username" onChange={this.inputChanged} type="text" value={this.state.username}/>
          </div>
    
          <div className="field">
            <label className="first_name">First Name</label>
            <div className="control">
              <input className="input" name="first_name" onChange={this.inputChanged} type="text" value={this.state.first_name}/>
            </div>
          </div>

          <div className="field">
            <label className="last_name">Last Name</label>
            <div className="control">
              <input className="input" name="last_name" onChange={this.inputChanged} type="text" value={this.state.last_name}/>
            </div>
          </div>

          <div className="field">
            <label className="">Number (ex.13335550000)</label>
            <div className="control">
              <input className="input" name="number" onChange={this.inputChanged} type="text" value={this.state.number}/>
            </div>
          </div>

          <div className="field">
            <label className="picture">Profile Picture URL</label>
            <div className="control">
              <input className="input" name="picture" onChange={this.inputChanged} type="text" value={this.state.picture}/>
            </div>
          </div>

          <div className="control mobile is-centered has-text-centered">
            <button type="submit" className="button is-primary is-rounded">Submit</button>
          </div>
        </form>
      </div>
      </>
      )
    }
}

const mapDispatchToProps = {
    updateUser: Actions.updateUser
  }
  
  const mapStateToProps = (state)=> {
    return {user: state.user}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditAccountForm);