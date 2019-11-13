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
    type: "SET_USER_LOCATION",
    payload: locationObj
    }
)

const changePageTo = (pageName) => (
  {
    type: "PAGE_TO_RENDER",
    payload: pageName
  }
)

const sendPost = post => dispatch => dispatch({
  type: "SEND_POST",
  payload: post
})

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

const deletePostAction = (array) => ({
  type: "DELETE_POST",
  payload: array
})

// FETCH
  const fetchUserLocation = () => dispatch => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        debugger
        dispatch(setUserLocation(location))
      })
    }
      else {
      console.log("Location not available")
    }
  }
const getPosts = () => dispatch => {
 
   fetch('http://localhost:3000/posts', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(r => r.json())
      .then(postsArray => {
        console.log(postsArray)
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
        // console.log(data)
        localStorage.token = data.token;
        dispatch(setUserAction(data.user));
      });

  };
  
  const createNewUserToDB = userData => dispatch => {
 
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    };
    fetch('http://localhost:3000/users', config)
      .then(r => r.json())
      .then(data => {
      
        dispatch(setUserAction(data.user));
        localStorage.token = data.token;
        localStorage.id = data.user.id
      });
  };

  const createPost = post => dispatch => {
    fetch('http://localhost:3000/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts' : 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => res.json())
    .then(post=>{
     
      dispatch(sendPost(post))})
   

  }

  const deletePost = (post, array) => dispatch => {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: 'DELETE',
    }).then(res => {
      dispatch(deletePostAction(array))
    })
  }

  const updatePost = (post,newPostData) => dispatch => {
    console.log("Before patch", post)
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPostData)
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
    createPost,
    sendPost,
    clearPost,
    deletePost,
    updatePost,
    changePageTo,
    switchFormOff,
    switchFormOn,
    fetchUserLocation
  };