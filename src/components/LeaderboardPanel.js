import React from "react";
import { connect } from "react-redux";

export class LeaderboardPanel extends React.Component {
  render() {
    const UsersData = Object.values(this.props.users);
    //console.log("inside render,", UsersData);
    let Rnakedusers = UsersData.map((u) => {
      const AnswersLength = Object.values(u.answers).length;
      //console.log("name:", u.name, "answers:", AnswersLength);
      const questionsLength = u.questions.length;
      const AllVotes = AnswersLength + questionsLength;
      return {
        Usr_name: u.name,
        Image: u.avatarURL,
        NoOfAnswers: AnswersLength,
        NoOfQues: questionsLength,
        SumOfVotes: AllVotes,
      };
    })
      .sort(function(x, y) {
        return x.SumOfVotes - y.SumOfVotes;
      })
      .reverse();
    Rnakedusers =
      Rnakedusers.length <= 3 ? Rnakedusers : Rnakedusers.slice(0, 3);

    return (
      <div className="center">
        {Rnakedusers.map((Usr, place) => (
          <div
            className="card"
            style={{ backgroundColor: "white" }}
            key={Usr.Usr_name}
          >
            <h3 style={{ color: "maroon", textAlign: "center" }}>
              <i className="fas fa-trophy"></i>&nbsp;
              <strong>{place + 1}</strong>
            </h3>
            <div
              style={{
                marginLeft: "1%",
                marginRight: "1%",
                textAlign: "center",
              }}
            >
              <h4>
                <img className="UsrAvatar" src={Usr.Image} alt="profile" />
                {Usr.Usr_name}
              </h4>
              The number of questions the user answered: {Usr.NoOfAnswers}
              <br />
              The number of questions the user asked:{Usr.NoOfQues}
              <hr />
              <strong> Total:{Usr.SumOfVotes} </strong>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(LeaderboardPanel);
