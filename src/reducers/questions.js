import {
  ANSWER_QUESTION,
  INC_QUESTION_IDX,
  SET_QUESTIONS,
} from "../actions/questions";


export default function questions (state = {}, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      const { answer } = action;
      const { correct_answer } = state.trivia[state.currIndex];
      return {
        ...state,
        answers: [
          ...state.answers,
          answer === correct_answer ? 1 : 0,
        ],
      };

    case INC_QUESTION_IDX:
      return {
        ...state,
        currIndex: state.currIndex + action.increment,
      };

    case SET_QUESTIONS:
      return {
        ...state,
        answers: [],
        currIndex: 0,
        trivia: action.trivia,
      };

    default:
      return state;
  }
}
