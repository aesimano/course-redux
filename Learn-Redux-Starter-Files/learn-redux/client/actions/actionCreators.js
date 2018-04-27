// action creators...
// these need to be pure functions, and cannot do any asynchronous work...
// look at redux-saga and redux-thunk to perform async calls to an API
// increment a like
export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, index) {
  console.log("REMOVE COMMENT!!!");
  console.log(postId, index);

  return {
    type: "REMOVE_COMMENT",
    postId,
    index
  };
}
