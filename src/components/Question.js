import { connect } from "react-redux";
import React from "react";

import AnswerForm from "./AnswerForm";
import parseString from "../utils/parseString";
import titleCase from "../utils/titleCase";
import shuffle from "../utils/shuffle";

class Question extends React.Component {
  render () {
    const {
      answers,
      category,
      currIndex,
      difficulty,
      question,
      triviaCount,
    } = this.props;

    return (
      <div className="question">
        <div className="content">
          <h2 className="content__title">
            Question {currIndex + 1}/{triviaCount}
          </h2>

          <div className="content__body">
            <h3 className="question__value">{parseString(question)}</h3>

            <AnswerForm answers={answers} />

            <div className="question__details">
              <div className="question__category">{category}</div>

              <div className="question__difficulty">
                {titleCase(difficulty)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = ({ questions }) => {
  // get current question
  const { currIndex, trivia } = questions;
  const currTrivia = trivia[currIndex];
  // get question details
  const { category, difficulty, question } = currTrivia;
  // get answers
  const answers = shuffle([
    currTrivia.correct_answer,
    ...currTrivia.incorrect_answers,
  ]);

  return {
    answers,
    category,
    currIndex,
    difficulty,
    question,
    triviaCount: trivia.length,
  };
};

export default connect(mapStateToProps, null)(Question);
