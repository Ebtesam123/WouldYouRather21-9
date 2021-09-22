import React from "react";

export class Error404 extends React.Component {
  render() {
    return (
      <div className="center">
        <h3>This Not Match a correct Path (Error code 404)</h3>
        <p>Kindly Select a valid menu item.</p>
      </div>
    );
  }
}

export default Error404;
