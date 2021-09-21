import {
  GET_QUESTIONS,
  SAVE_QUESTION,
  ADD_QUESTION_ANSWER,
} from "../actions/actionTypes";

function questions_Reducer(state = "", action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.content,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.content.id]: action.content,
      };

    case ADD_QUESTION_ANSWER:
      const QuestionRecord = action.content;
      const oldQuestion = state[QuestionRecord.Question_ID];
      return {
        ...state,
        [QuestionRecord.Question_ID]: {
          ...oldQuestion,
          [QuestionRecord.answer]: {
            ...oldQuestion[QuestionRecord.answer],
            votes: [
              oldQuestion[QuestionRecord.answer].votes.push(
                QuestionRecord.LoggedUser
              ),
            ],
          },
        },
      };

    default:
      return state;
  }
}

export default questions_Reducer;
