import { combineReducers } from 'redux';

import PostsReducer from './postsreducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
