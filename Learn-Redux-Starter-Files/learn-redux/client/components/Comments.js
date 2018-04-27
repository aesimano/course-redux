import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    // use React.createRef() in React 16.3
    // see https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    // this.author = React.createRef();
    // this.comment = React.createRef();

    this.author = null;
    this.setAuthorRef = element => {
      this.author = element;
    };

    this.comment = null;
    this.setCommentRef = element => {
      this.comment = element;
    };

    this.commentForm = null;
    this.setCommentFormRef = element => {
      this.commentForm = element;
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  renderComment(comment, index) {
    return (
      <div key={index} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.postId,
              index
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault(); // stop page from refreshing
    // const { postId } = this.props.params;
    const postId = this.props.postId;
    const author = this.author.value;
    const comment = this.comment.value;
    this.props.addComment(postId, author, comment);
    this.commentForm.reset();
  }

  render() {
    return (
      <div className="comment">
        {this.props.postComments.map(this.renderComment)}

        <form
          ref={this.setCommentFormRef}
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref={this.setAuthorRef} placeholder="author" />
          <input type="text" ref={this.setCommentRef} placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
