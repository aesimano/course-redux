import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = React.createClass({
  render() {
    // index of the post
    // get us the post itself
    const { postId } = this.props.params;
    const index = this.props.posts.findIndex(post => post.code === postId);
    const post = this.props.posts[index];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo
          index={index}
          post={post}
          comments={this.props.comments}
          increment={this.props.increment}
        />
        <Comments
          postComments={postComments}
          postId={this.props.params.postId}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}
        />
      </div>
    );
  }
});

export default Single;
