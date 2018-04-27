import React from "react";
import { Link } from "react-router";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Dressssuxtagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

// const Main = React.createClass({
// });

export default Main;
