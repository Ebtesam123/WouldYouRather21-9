import { withRouter } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import Badge from "react-bootstrap/Badge";

export class Result extends React.Component {
  resultContent(questionText, optionVotes, TotalVotes, UsrChoice) {
    const progress = ((optionVotes / TotalVotes) * 100).toFixed(0);
    const width = progress + "%";
    console.log(width);
    return (
      <div>
        <p className="Result">{questionText}</p>
        <div className="w3-light-grey">
          <div className="w3-container" style={{ width: width }}>
            {width}{" "}
          </div>
        </div>
        <p className="tiny">
          {optionVotes} of totol {TotalVotes} votes{" "}
        </p>
        {UsrChoice && (
          <div style={{ textAlign: "right" }}>
            <Badge bg="secondary">Your Choosed This option</Badge>
          </div>
        )}
      </div>
    );
  }

  render() {
    const question = this.props.question;
    const user = this.props.user;

    return (
      <div className="Result" style={{ background: "white" }}>
        <h5>Results of Would You Rather:</h5>
        {this.resultContent(
          question.optionOne.text,
          question.optionOne.votes.length,
          question.optionOne.votes.length + question.optionTwo.votes.length,
          user.answers[question.id] === "optionOne"
        )}
        {this.resultContent(
          question.optionTwo.text,
          question.optionTwo.votes.length,
          question.optionOne.votes.length + question.optionTwo.votes.length,
          user.answers[question.id] === "optionTwo"
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users[state.LoggedUser],
  };
}

export default withRouter(connect(mapStateToProps)(Result));
