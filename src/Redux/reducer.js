// const state = {
//   user: {}
// }

export default (state={}, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        // console.log('reducer: ', payload);
        return payload
      
      case 'CLEAR_USER':
        return {}
        
      default:
        return state;
    }
  };

  