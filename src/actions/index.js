import axios from 'axios';
import { browserHistory } from 'react-router';
// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'http://bfcs52-blog-part2.herokuapp.com/api';
const ROOT_URL = 'http://blogapp-part3.herokuapp.com/api';
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '';


export function fetchposts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      // do something with response.data  (some json)
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
      console.log(response.data);
    }).catch(error => {
      // hit an error do something else!
    });
  };
}

export function fetchpost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
      console.log(response.data);
    }).catch(error => {
    // hit an error do something else!
    });
  };
}

export function createPost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      dispatch({ type: 'CREATE_POST', payload: response.data });
      console.log(response.data);
      browserHistory.push('/');
    }).catch(error => {
     // hit an error do something else!
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      dispatch({ type: 'UPDATE_POST', payload: response.data });
      browserHistory.push('/');
    }).catch(error => {
    // hit an error do something else!
    });
  };
}


export function deletePost(id, post) {
  console.log('here');
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      dispatch({ type: 'DELETE_POST', payload: response.data });
      browserHistory.push('/');
    }).catch(error => {
    // hit an error do something else!
    });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}


export function signinUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));

  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser({ email, password, username }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));

  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password, username }).then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
      console.log('signup true');
    }).catch(error => {
      console.log('false');
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}
