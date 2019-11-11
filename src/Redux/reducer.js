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
        debugger
        return{
          ...state,
          location: payload,
          ...state
        }
      }
      case "CLEAR_POST":
        return {
          ...state,
          post: null,
          ...state
          }
      case 'HOLD_POSTS':
        return {
          ...state,
          posts: payload,
          ...state
        }
      case "SEND_POST": {
        return {
          ...state,
          post: payload,
          ...state
        }
      }    
      case "UPDATE_POST":
        return {
          ...state,
          post: payload,
          ...state
        }

      case "SWITCH_FORM_ON":
        return {
          ...state,
          formSwitch: payload,
          ...state
        }
      case "SWITCH_FORM_OFF":
        return {
          ...state,
          formSwitch: payload,
          ...state
        }
      default:
        return state;
    }
  };

  