import { LogIn } from "./actionTypes";

export const setAuthUser = (u_id) => (dispatch) => {
  dispatch({
    type: LogIn,
    content: u_id,
  });
};
export default setAuthUser;
