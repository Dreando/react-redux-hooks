import {fetchPostsCall} from "../ApiClient";

export const FETCH_POSTS_STARTED = "FETCH_POSTS_STARTED";
export const FETCH_POSTS_DONE = "FETCH_POSTS_DONE";
export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED";

export const fetchPostsStarted = () => {
  return {
    type: FETCH_POSTS_STARTED
  }
};

export const fetchPostsDone = (posts) => {
  return {
    type: FETCH_POSTS_DONE,
    posts
  }
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsStarted());
    fetchPostsCall()
      .then(response => dispatch(fetchPostsDone(response)))
  }
};
