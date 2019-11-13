import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';

class Form extends Component {
  state = {
    username: "",
    picture: "",
    password: "",
    number:"",
    first_name: "",
    last_name: ""
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.createNewUserToDB(this.state);
    this.props.switchForm()
  };

  handleSwitch = () => {
    console.log("HandleSwitch", this.props.switchForm)
    this.props.switchForm()
    
  }

  render() {
    return (
      <div className="columns is-vcentered is-centered is-mobile">
<div className="login column is-4 ">
  <img src="https://images.unsplash.com/photo-1495430288918-03be19c7c485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="highway"/>
</div>
<div className="login column ">
<section className="section">
  <div className="has-text-centered">
      <h1>Sign Up</h1>
  </div>

  <div className="field">
    <label className="label">First Name</label>
    <div className="control has-icons-right">
      <input className="input" type="text" value={this.state.first_name}
            name="first_name"
            onChange={this.handleChange}/>
    </div>
  </div>

  <div className="field">
    <label className="label">Last Name</label>
    <div className="control has-icons-right">
      <input className="input" type="text"value={this.state.last_name}
            name="last_name"
            onChange={this.handleChange}/>
    </div>
  </div>

  <div className="field">
    <label className="label">Username</label>
    <div className="control has-icons-right">
      <input className="input" type="text"value={this.state.username}
            name="username"
            onChange={this.handleChange}/>
    </div>
  </div>
  <div className="field">
    <label className="label">Password</label>
    <div className="control has-icons-right">
      <input className="input" type="password" value={this.state.password}
      name="password"
      onChange={this.handleChange}/>
      <span className="icon is-small is-right">
        <i className="fa fa-key"></i>
      </span>
    </div>
  </div>

  <div className="field">
    <label className="label">Insert a Picture Link</label>
    <div className="control has-icons-right">
      <input className="input" type="text" value={this.state.picture}
            name="picture"
            onChange={this.handleChange}/>
    </div>
  </div>

  <div className="field">
    <label className="label">Phone Number (15169993333)</label>
    <div className="control has-icons-right">
      <input className="input" type="text"value={this.state.number}
            name="number"
            onChange={this.handleChange}/>
    </div>
  </div>

  

  <div className="has-text-centered">
    <a onClick={e => this.handleSubmit(e, this.state)}className="button is-vcentered is-primary is-outlined ">Sign Up</a>
  </div>
  <div className="has-text-centered">
    <br></br>
    <a className="is-primary" onClick={this.handleSwitch}> Already have an account? Log In</a>
  </div>
</section>
</div>
</div>
    );
  }
}

const mapDispatchToProps = {
  createNewUserToDB: Actions.createNewUserToDB
  
};
export default connect(
  null,
  mapDispatchToProps
)(Form);