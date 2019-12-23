import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {incrementAction, decrementAction} from "./actions/countActions";
import {fetchPosts} from "./actions/postsActions";

const App = () => {
  const countState = useSelector(state => state.countState);
  const postsState = useSelector(state => state.postsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, []);

  const handleLoading = (isLoading) => {
    if (isLoading) {
      return (
        <div className="Loader">Is loading</div>
      )
    }
  };

  const handleError = (hasError) => {
    if (hasError) {
      return (
        <div className="Error">Error fetching posts</div>
      )
    }
  };

  const renderPost = (post) => {
    return (
      <div className="Post">
        <div className="Post__Header">
          <p>{post.title}</p>
          <p>Created by: {post.userId}</p>
        </div>
        <div className="Post__Text">
          <p>{post.body}</p>
        </div>
      </div>
    )
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current counter value: {countState.count}</h1>
        <div className="buttons">
          <button onClick={() => dispatch(incrementAction())}>Increment</button>
          <button onClick={() => dispatch(decrementAction())}>Decrement</button>
        </div>
      </header>
      <section className="PostsSection">
        {handleLoading(postsState.isLoading)}
        {postsState.posts.map(post => renderPost(post))}
      </section>
    </div>
  );
};

export default App;
