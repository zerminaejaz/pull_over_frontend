export default (state={pageToRender: "HomeContainer"}, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        return {
          ...state,
          user: payload
        }
      case 'CLEAR_USER':{
        return {
        }
      }
      case "SET_USER_LOCATION":{
        return{
          ...state,
          location: payload
        }
      }
      case "SET_CLICKED_USER":{
        return{
          ...state,
          clickedUser: payload
        }
      }
      case "CLEAR_POST":
        return {
          ...state,
          post: null
          }
      case "DELETE_POST":
        return {
          ...state, 
          posts: payload,
          post: null
        }
      case 'HOLD_POSTS':
        return {
          ...state,
          posts: payload
        }
      case "SEND_POST": {
        return {
          ...state,
          posts: [...state.posts, payload],
          post: payload
        }
      }    
      case "UPDATE_POST":
        return {
          ...state,
          post: payload
        }
      case "PAGE_TO_RENDER":
        return {
          ...state,
          pageToRender: payload
        }
      case "SWITCH_FORM_ON":
        return {
          ...state,
          formSwitch: payload
        }
      case "SWITCH_FORM_OFF":
        return {
          ...state,
          formSwitch: payload,
        }
      default:
        return state;
    }
  };

  