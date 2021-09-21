import {
  GetQuestions,
  AddQuestionAnswer,
  SaveQuestion,
} from "../actions/questions";
import { GetUsers, addUserAnswer, AddUserQuestion } from "../actions/users";
import { _saveQuestionAnswer, _saveQuestion } from "../_Data";

export const GetData = () => {
  return (dispatch) => {
    dispatch(GetUsers());
    dispatch(GetQuestions());
  };
};

export const SaveAnswer = (obj) => (dispatch) => {
  dispatch(AddQuestionAnswer(obj));
  dispatch(addUserAnswer(obj));
  return _saveQuestionAnswer({
    authedUser: obj.LoggedUser,
    qid: obj.Question_ID,
    answer: obj.ans,
  });
};

export const HandleQuestionAddition = (
  FirstOption,
  SecondOption,
  author
) => async (dispatch) => {
  const NewQuestion = await _saveQuestion({
    optionOneText: FirstOption,
    optionTwoText: SecondOption,
    author: author,
  });

  dispatch(SaveQuestion(NewQuestion));
  dispatch(AddUserQuestion(NewQuestion));
};
