import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { HandleQuestionAddition } from "../actions/DispatchQuestionsUsers";

export class AddQuestion extends React.Component {
  state = {
    option1: "",
    option2: "",
    DirectToHome: false,
  };
  SubmitQue = async (event) => {
    if (this.state.option1 === "" || this.state.option2 === "") {
      alert("Please Fill all options first");
    } else {
      event.preventDefault();
      await new Promise((res) => {
        this.props.HandleQuestionAddition(
          this.state.option1,
          this.state.option2,
          this.props.LoggedUser
        );
        setTimeout(() => res("Successfull addition"), 400);
      });
      this.setState({ DirectToHome: true });
    }
  };
  render() {
    return this.state.DirectToHome ? (
      <Redirect to="/" />
    ) : (
      <div className="center card" style={{ backgroundColor: "white" }}>
        <h3 style={{ textAlign: "center" }}>
          <img
            src="https://cdn.dribbble.com/users/2894696/screenshots/15460873/media/3c0cd2e9760839120f069e88a6868e24.jpg?compress=1&resize=400x300"
            alt="add poll"
            className="UsrAvatar"
          />
          Add new would you rather question
        </h3>

        <br />
        <div className="Add">
          <h5 style={{ textAlign: "center" }}>
            Please insert the question options
          </h5>
          <form>
            <label>First Option</label>
            <input
              type="text"
              id="Option1"
              placeholder="Insert First Option Here.."
              onChange={(e) => this.setState({ option1: e.target.value })}
            />

            <label>
              Second Option:
              <input
                type="text"
                id="Option2"
                placeholder="Insert Second Option Here.."
                onChange={(e) => this.setState({ option2: e.target.value })}
              />
            </label>

            <button className="btn" onClick={this.SubmitQue}>
              Add a New Poll
            </button>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    LoggedUser: state.LoggedUser,
  };
}

export default connect(mapStateToProps, { HandleQuestionAddition })(
  AddQuestion
);
