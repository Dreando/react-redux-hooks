import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_DONE,
} from '../actions/postsActions';

const defaultState = {
  posts: [],
  isLoading: false,
};

export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return Object.assign({}, state, {isLoading: true});
    case FETCH_POSTS_DONE:
      return Object.assign({}, state, {isLoading: false, posts: action.posts});
    default:
      return state;
  }
};
