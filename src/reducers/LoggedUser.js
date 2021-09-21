import { LogIn } from "../actions/actionTypes";

const LoggedUser = (state = "", action) => {
  switch (action.type) {
    case LogIn: {
      return action.content;
    }
    default:
      return state;
  }
};
export default LoggedUser;
