import React, { Component } from 'react';
import Actions from '../Redux/actions';
import { connect } from 'react-redux';
import Form from './Form';
import LoginForm from './LoginForm'

class SignupOrLogIn extends Component {

    state = {
        signUpSwitch: false
    };
    
    switchForm = () => {
        this.setState({
            signUpSwitch: !this.state.signUpSwitch
        })
        console.log("Switchstate:", this.state.signUpSwitch)
    }



    renderLogin = () => {
        if (this.state.signUpSwitch) {
            return (<Form switchForm={this.switchForm}/>)
        } else {
            return(<LoginForm switchForm={this.switchForm}/>)
        }
    }

    render(){
        return(<>
            {this.renderLogin()}
        </>)
    }
    
}



const mapDispatchToProps = {
    loginUserToDB: Actions.loginUserToDB
  };
  export default connect(
    null,
    mapDispatchToProps
  )(SignupOrLogIn);