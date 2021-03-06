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
    }


    render(){
        return(<>
        <div width="100%">
            {this.state.signUpSwitch ? <Form switchForm={this.switchForm}/>:<LoginForm switchForm={this.switchForm}/>}
        </div>
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