import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { SaveAnswer } from "../actions/DispatchQuestionsUsers";

export class Question extends React.Component {
  state = {
    Answervalue: "",
    Submitted: false,
  };

  handleChange = (e) => {
    this.setState({ Answervalue: e.target.value });
    //console.log(e.target.value);
  };

  SubmitFunc = (event) => {
    event.preventDefault();
    if (this.state.Answervalue !== "") {
      const SaveAnswer = this.props.SaveAnswer;

      this.setState({ Submitted: true }, function() {
        SaveAnswer({
          LoggedUser: this.props.LoggedUser,
          Question_ID: this.props.question.id,
          ans: this.state.Answervalue,
        });
      });
    }
  };

  render() {
    const question = this.props.question;
    if (this.state.Submitted === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    return (
      <div className="center">
        <h4>Would you rather</h4>
        <form onSubmit={this.SubmitFunc}>
          <label className="container">
            {question.optionOne.text}
            <input
              type="radio"
              name="radio"
              onChange={this.handleChange}
              checked={this.state.Answervalue === "optionOne"}
              value="optionOne"
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            {question.optionTwo.text}
            <input
              type="radio"
              name="radio"
              onChange={this.handleChange}
              checked={this.state.Answervalue === "optionTwo"}
              value="optionTwo"
            />
            <span className="checkmark"></span>
          </label>

          <button className="btn" disabled={this.state.Answervalue === ""}>
            Submit Answer
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    LoggedUser: state.LoggedUser,
  };
}

export default connect(mapStateToProps, { SaveAnswer })(Question);
