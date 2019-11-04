export default (state={}, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        return payload
      case 'CLEAR_USER':
        return {
          ...state,
          user: {},
          ...state
        }
      case 'HOLD_POSTS':
        return {
          ...state,
          posts: payload,
          ...state
        }
      case "SEND_POST":
        return {
          ...state,
          post: {},
          ...state
        }
        
      default:
        return state;
    }
  };

  