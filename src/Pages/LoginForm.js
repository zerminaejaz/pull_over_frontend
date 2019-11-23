import React, { Component } from 'react';
import Actions from '../Redux/actions';
import { connect } from 'react-redux';
import "./login.css"

class LoginForm extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleLogInUserToDb=(e, state)=>{
    e.preventDefault()
    // console.log('i was clicked')
    this.props.loginUserToDB(state)
    this.setState({
      username: "",
      password: ""
    })
  }

  handleSwitch = () => {
    this.props.switchForm()
  }

  render() {
    return (<> <div className="columns is-vcentered is-centered is-mobile">
    <div className="login column is-6 ">
      <img src="https://images.unsplash.com/photo-1495430288918-03be19c7c485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="city"/>
    </div>
    <div className="login columns is-centered animated fadeInDown">
    <section className="section">
      <div className="has-text-centered">
          <img className="login-logo" src="https://png.pngtree.com/svg/20161210/p_970543.png" alt="sticker" width="200px" height="200px"/>
      </div>

      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-right">
          <input className="input" type="text"value={this.state.username}
          name="username"
          onChange={this.handleChange}/>
          <span className="icon is-small is-right">
            <i className="fa fa-user"></i>
          </span>
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
      <br></br>
      <div className="has-text-centered">
        {/* <button onClick={e => this.handleLogInUserToDb(e, this.state)}className="button is-vcentered is-link is-outlined ">Login</button> */}
        <button  onClick={e => this.handleLogInUserToDb(e, this.state)} class="glow-on-hover" type="button">LOG IN</button>
      </div>

      <div className="has-text-centered">
        <br></br>
        <a className="is-primary" onClick={this.handleSwitch}> Already have an account? Sign up now!</a>
      </div>
    </section>
    </div>
    </div>
    </>
    )
  }
}
const mapDispatchToProps = {
  loginUserToDB: Actions.loginUserToDB
};


export default connect(
  null,
  mapDispatchToProps
)(LoginForm);