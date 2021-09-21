import { connect } from "react-redux";
import React from "react";
import setAuthUser from "../actions/UserLogin";

class LoginPage extends React.Component {
  state = {
    value: "",
  };

  Submit = async (event) => {
    event.preventDefault();
    await new Promise((response) => {
      setTimeout(() => response(), 200);
    });
    this.props.setAuthUser(this.state.value);
  };
  render() {
    const users = this.props.users;
    return (
      <div className="center">
        <h2>This is Would You Rather Amazing Game! WELCOME</h2>
        <br />
        <h3 className="center"> Kindly Login by Selecting your name below:</h3>

        <form onSubmit={this.Submit}>
          <select
            id="userSelect"
            className="center"
            style={{ height: "50px" }}
            defaultValue="Select Your Name..."
            onChange={(e) => this.setState({ value: e.target.value })}
          >
            <option key="" disabled>
              Select Your Name...
            </option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>

          {this.state.value === "" ? (
            <button disabled className="btn center">
              log in
            </button>
          ) : (
            <button className="btn center">log in</button>
          )}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: Object.values(state.users),
  };
}
export default connect(mapStateToProps, { setAuthUser })(LoginPage);
