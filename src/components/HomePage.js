import React from "react";
import { connect } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Twist from "./Twist";

export class HomePage extends React.Component {
  render() {
    const users = this.props.users;
    const LoggedUser = this.props.LoggedUser;
    const questions = this.props.questions;
    const UserAnswers = users[LoggedUser].answers;
    const Ans_Ids = Object.keys(UserAnswers);
    const Questions = Object.values(questions);
    const unanswered = Questions.filter(
      (q) => Ans_Ids.indexOf(q.id) === -1
    ).sort(function(x, y) {
      return y.timestamp - x.timestamp;
    });
    const answered = Questions.filter((q) => Ans_Ids.indexOf(q.id) > -1).sort(
      function(x, y) {
        return y.timestamp - x.timestamp;
      }
    );
    return (
      <Tabs
        defaultActiveKey="UnansweredQuestions"
        id="uncontrolled-tab-example"
        className="mb-3"
        transition={false}
      >
        <Tab eventKey="UnansweredQuestions" title="Un Answered Questions">
          {unanswered.map((question) => (
            <Twist
              key={question.id}
              NotAnswerd={true}
              question_id={question.id}
            />
          ))}
        </Tab>
        <Tab
          eventKey="AnsweredQurstions"
          title="Answered Questions with results"
        >
          {answered.map((question) => (
            <Twist
              key={question.id}
              NotAnswerd={false}
              question_id={question.id}
            />
          ))}
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps(state) {
  return {
    LoggedUser: state.LoggedUser,
    users: state.users,
    questions: state.questions,
  };
}

export default connect(mapStateToProps)(HomePage);
