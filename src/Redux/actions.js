// ACTION CREATORS

const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
  });
  
  const clearUserAction = () => ({
    type: 'CLEAR_USER'
  });
  
  // FETCH
  
  const persistUserFromAPI = () => dispatch => {
    fetch('http://localhost:3000/persist', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + localStorage.token
      }
    })
      .then(r => r.json())
      .then(user => {
        dispatch(setUserAction(user));
      });
  };
  
  const loginUserToDB = userData => dispatch => {
    
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    };
    fetch('http://localhost:3000/login', config)
      .then(r => r.json())
      .then(data => {
        localStorage.token = data.token;
        dispatch(setUserAction(data.user));
      });
  };
  
  const createNewUserToDB = userData => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    };
    fetch('http://localhost:3000/users', config)
      .then(r => r.json())
      .then(data => {
        dispatch(setUserAction(data.user));
        localStorage.token = data.token;
      });
  };
  
  export default {
    persistUserFromAPI,
    loginUserToDB,
    createNewUserToDB
  };