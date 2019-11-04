import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import PopupShow from '../components/home_components/PopupShow'
import PosteesInfoContainer from './PosteesInfoContainer';


class HomeContainer extends Component{

    render(){
        return(
            <>
           
            <br></br><br></br>
            <div className="columns has-text-centered is-mobile is-centered">
              <div className="column is-half-mobile is-half-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                  <p>REACTMAP</p>
              </div>
              <div className="column auto">
                <PopupShow/>
                <PosteesInfoContainer/>
              </div>
            </div>


            </>
        )
    }

}
const mapDispatchToProps = {
    persistUserFromAPI: Actions.persistUserFromAPI,
    logoutUser: Actions.logoutUser
  };
  
  const mapStateToProps = (state)=> {
    return {user: state}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContainer);