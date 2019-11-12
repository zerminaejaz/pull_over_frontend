export default (state={}, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        return {
          user: payload
        }
      case 'CLEAR_USER':
        return {
        }
      case "SET_USER_LOCATION":{
        return{
          ...state,
          location: payload
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

  