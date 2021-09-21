import { _getQuestions } from "../_Data";

import {
  GET_QUESTIONS,
  ADD_QUESTION_ANSWER,
  SAVE_QUESTION,
} from "./actionTypes";

export const GetQuestions = () => async (dispatch) => {
  const questions = await _getQuestions();
  dispatch({
    type: GET_QUESTIONS,
    content: questions,
  });
};

export const SaveQuestion = (question) => (dispatch) => {
  dispatch({
    type: SAVE_QUESTION,
    content: question,
  });
};

export const AddQuestionAnswer = (AnsRecord) => (dispatch) => {
  dispatch({
    type: ADD_QUESTION_ANSWER,
    content: {
      LoggedUser: AnsRecord.LoggedUser,
      Question_ID: AnsRecord.Question_ID,
      answer: AnsRecord.ans,
    },
  });
};
