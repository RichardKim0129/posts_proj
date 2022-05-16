import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts } = useSelector((state) => state.posts); // Simply had an array of posts, but now after changing the reducers and action,
  // now we have an object with a property of posts so we must deconstruct it: [] -> {posts:[]} we are doing this because we will have
  // more properties like the isLoading property and so on
  const classes = useStyles();

  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {/* Curly braces to indicate JS logic */}
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
