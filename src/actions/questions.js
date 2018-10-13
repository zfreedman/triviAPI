export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const INC_QUESTION_IDX = "INC_QUESTION_IDX";
export const SET_QUESTIONS = "SET_QUESTIONS";

// so the way answers are going to be checked is
// if the string submitted here EXACTLY
// matches the correct_answer feature
// ... i don't love this approach but right now
// i don't want to spend the time to setup
// indices on the questions data retrieved from the
// API and reforamt it. this is more "quick and dirty"
export function answerQuestion (answer) {
  return {
    type: ANSWER_QUESTION,
    answer,
  };
}

// increment the current question index
export function incQuestionIdx () {
  return {
    type: INC_QUESTION_IDX,
    increment: 1,
  };
}

// set the entire array of trivia questions
export function setQuestions (trivia) {
  return {
    type: SET_QUESTIONS,
    trivia,
  };
}
