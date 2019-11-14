import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/actions';
import "./navbar.css"

class Navbar extends Component{

  handleLogout = ()  => {
    this.props.logoutUser()
  }

  changePageTo = (pageName) => {
    this.props.changePageTo(pageName)
  }
    render(){
        return(<>
        <div style={{width:"100%"}}>
            <nav className="navbar" role="navigation" aria-label="main navigation" style={{borderBottom: "6px solid #40A4F4"}}>
            <div className="navbar-brand">
            <a onClick={()=>this.changePageTo("Profile")}>
                <img src={this.props.user.picture} width="112" height="28" style={{borderRadius:"100%", padding:"10px"}}/>
            </a>
{/*            
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
               */}
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a onClick={()=>this.changePageTo("HomeContainer")} className="navbar-item"><i className="fa fa-fw fa-home" title="home"></i>
                </a>
                <a onClick={()=>this.changePageTo("Profile")} className="navbar-item"><i className="fas fa-user" title="profile page"></i>
                </a>
                <a onClick={()=>this.changePageTo("MyPostsContainer")} className="navbar-item"><i className="fas fa-exclamation-triangle" title="my posts"></i>
                </a>
              </div>
              <div className="navbar-end ">
                <div className="navbar-item-c ">
                  <div className="buttons ">
                    <a onClick={this.handleLogout} className="button is-light is-rounded">
                      <strong>Log Out</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          </div>
          </>
       )
    }
}
const mapDispatchToProps = {
    persistUserFromAPI: Actions.persistUserFromAPI,
    logoutUser: Actions.logoutUser,
    changePageTo: Actions.changePageTo
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user}
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar);