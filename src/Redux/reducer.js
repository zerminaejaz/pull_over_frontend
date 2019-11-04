// const state = {
//   posts: {}
//   user: {}
// }

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
        
      default:
        return state;
    }
  };

  