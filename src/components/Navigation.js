import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setAuthUser from "../actions/UserLogin";

class Navegation extends React.Component {
  render() {
    const UserDetails = this.props.users[this.props.LoggedUser];
    return (
      <div className="topnav">
        <Link to="/" className="active">
          Home Page
        </Link>
        <Link to="/Add">Add a question</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <div className="inverted right">
          WELCOME, {UserDetails.name}
          <img
            src={UserDetails.avatarURL}
            className="UsrAvatar"
            alt={`${UserDetails.name}`}
          />
          <Link
            to="/"
            onClick={(event) => {
              event.preventDefault && this.props.setAuthUser(null);
            }}
          >
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    LoggedUser: state.LoggedUser,
    users: state.users,
  };
}

export default connect(mapStateToProps, { setAuthUser })(Navegation);
