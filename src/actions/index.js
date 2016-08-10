import axios from 'axios';
import { browserHistory } from 'react-router';
// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'http://bfcs52-blog-part2.herokuapp.com';
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
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then(response => {
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
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then(response => {
      dispatch({ type: 'UPDATE_POST', payload: response.data });
      browserHistory.push('/');
    }).catch(error => {
    // hit an error do something else!
    });
  };
}


export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: 'DELETE_POST', payload: response.data });
      browserHistory.push('/');
    }).catch(error => {
    // hit an error do something else!
    });
  };
}
