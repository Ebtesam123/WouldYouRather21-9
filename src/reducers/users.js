import {
  GET_USERS,
  QUESTION_ADDITION_TO_USER,
  ADD_USER_ANSWER,
} from "../actions/actionTypes";

function users_Reducer(state = "", action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.content,
      };

    case QUESTION_ADDITION_TO_USER:
      const OldUsers = state[action.content.author];
      return {
        ...state,
        [action.content.author]: {
          ...OldUsers,
          questions: OldUsers.questions.push(action.content.id),
        },
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.content.LoggedUser]: {
          ...state[action.content.LoggedUser],
          answers: {
            ...state[action.content.LoggedUser].answers,
            [action.content.Question_ID]: action.content.answer,
          },
        },
      };
    default:
      return state;
  }
}
export default users_Reducer;
