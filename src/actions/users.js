import {
  GET_USERS,
  QUESTION_ADDITION_TO_USER,
  ADD_USER_ANSWER,
} from "./actionTypes";
import { _getUsers } from "../_Data";

export const GetUsers = () => async (dispatch) => {
  const users = await _getUsers();
  dispatch({
    type: GET_USERS,
    content: users,
  });
};
export const AddUserQuestion = (obj) => (dispatch) => {
  const id = obj.id;
  const author = obj.author;
  dispatch({
    type: QUESTION_ADDITION_TO_USER,
    content: { id, author },
  });
};

export const addUserAnswer = (AnsRecord) => (dispatch) => {
  dispatch({
    type: ADD_USER_ANSWER,
    content: {
      LoggedUser: AnsRecord.LoggedUser,
      Question_ID: AnsRecord.Question_ID,
      answer: AnsRecord.ans,
    },
  });
};
