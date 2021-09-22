import React from "react";
import { connect } from "react-redux";
import Error404 from "./Error404";
import Question from "./Question";
import Result from "./Result";

export class Twist extends React.Component {
  render() {
    return this.props.NotFound ? (
      <Error404 />
    ) : (
      <div className="card center">
        <h5>
          <br />
          <br />
          <img
            className="UsrAvatar"
            src={this.props.author.avatarURL}
            alt="profile"
          />
          {this.props.author.name}'s Question
        </h5>
        {this.props.NotAnswerd ? (
          <Question question={this.props.Que} />
        ) : (
          <Result question={this.props.Que} />
        )}
        <br />
        <br />
      </div>
    );
  }
}

function mapStateToProps(state, { question_id, match }) {
  let Qid,
    author,
    NotFound = false;
  question_id !== undefined
    ? (Qid = question_id)
    : (Qid = match.params.question_id);

  const Que = state.questions[Qid];
  if (Que === undefined) NotFound = true;
  else {
    author = state.users[Que.author];
  }

  return {
    Que,
    author,
    NotFound,
  };
}

export default connect(mapStateToProps)(Twist);
