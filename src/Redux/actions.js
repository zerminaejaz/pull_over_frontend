// ACTION CREATORS

const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

const clearUserAction = () => ({
  type: 'CLEAR_USER',
  payload: {}
});

const holdPosts = postsArray => ({
  type: "HOLD_POSTS",
  payload: postsArray
})

const logoutUser = () => dispatch => {
  dispatch(clearUserAction())
  localStorage.clear()
  }

const sendPost = post => ({
  type: "SEND_POST",
  payload: post
})
const clearPost = () => ({
  type: "CLEAR_POST",
  payload: null
})

  
// FETCH
const getPosts = () => dispatch => {
  // console.log("getPosts/actions")
    fetch('http://localhost:3000/posts', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(r => r.json())
      .then(postsArray => {
        dispatch(holdPosts(postsArray));
      });
          
  }
  
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
    createNewUserToDB,
    logoutUser,
    getPosts,
    sendPost,
    clearPost
  };