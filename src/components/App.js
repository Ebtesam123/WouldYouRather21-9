import React from "react";
import { GetData } from "../actions/DispatchQuestionsUsers";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Login";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import Twist from "./Twist";
import LeaderboardPanel from "./LeaderboardPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Error404 } from "./Error404";
import AddQuestion from "./AddQuestion";

class App extends React.Component {
  componentDidMount() {
    this.props.GetData();
  }
  render() {
    return (
      <Router>
        <div>
          {this.props.LoggedUser ? (
            <div>
              <Navigation />
              <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/questions/:question_id" component={Twist} />
                <Route exact path="/add" render={() => <AddQuestion />} />
                <Route
                  exact
                  path="/leaderboard"
                  render={() => <LeaderboardPanel />}
                />
                <Route component={Error404} />
              </Switch>
            </div>
          ) : (
            <Route render={() => <LoginPage />} />
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    LoggedUser: state.LoggedUser,
  };
}

export default connect(mapStateToProps, { GetData })(App); // mapStateToProps is the data that the compoenent needs
