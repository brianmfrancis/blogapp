import { combineReducers } from 'redux';

import PostsReducer from './postsreducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostsReducer,
});

export default rootReducer;
