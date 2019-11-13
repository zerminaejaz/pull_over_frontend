import React, { Component} from 'react';
import { connect } from 'react-redux';


class ReviewsContainer extends Component{
  
    render(){
        return(<><h1>My Reviews</h1></>
        )
    }
}
const mapDispatchToProps = {
  };
  
  const mapStateToProps = (state)=> {
    return {user: state.user
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReviewsContainer);