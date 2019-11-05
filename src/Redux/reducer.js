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
          post: payload,
          ...state
        }
        case "UPDATE_POST":
        return {
          ...state,
          post: payload,
          ...state
        }
      case "CLEAR_POST":
        return {
          ...state,
          post: null,
          ...state
          }
      default:
        return state;
    }
  };

  