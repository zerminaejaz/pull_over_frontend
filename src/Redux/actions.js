// ACTION CREATORS

const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

const updatePostAction= (post) => ({
  type: 'UPDATE_POST',
  payload: post
})

const holdPosts = postsArray => ({
  type: "HOLD_POSTS",
  payload: postsArray
})

const logoutUser = () => dispatch => {
  dispatch(clearUserAction())
  localStorage.clear()
}

const setUserLocation = (locationObj) => (
  {
  type:"SET_USER_LOCATION",
  payload: locationObj
})


const sendPost = post => dispatch => dispatch(({
  type: "SEND_POST",
  payload: post
}))

const switchFormOn = () => ({
  type: "SWITCH_FORM_ON",
  payload: true
})

const switchFormOff = () => ({
  type: "SWITCH_FORM_OFF",
  payload: false
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
        // console.log(user)
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
        // console.log(data)
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

  const deletePost = post => dispatch => {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: 'DELETE',
    }).then(res => {
      dispatch(getPosts())
    })
    
  }

  const updatePost = post => dispatch => {
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    };
    fetch(`http://localhost:3000/posts/${post.id}`, config)
      .then(r => r.json())
      .then(post => {
        dispatch(updatePostAction(post));
      });
  };
  
  export default {
    persistUserFromAPI,
    loginUserToDB,
    createNewUserToDB,
    logoutUser,
    getPosts,
    sendPost,
    clearPost,
    deletePost,
    updatePost,
    switchFormOff,
    switchFormOn,
    setUserLocation
  };