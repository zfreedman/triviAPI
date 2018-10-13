import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import btn from "../material/btn";
import {
  DISPLAY_MENU,
  setDisplay
} from "../actions/display";

const splitter = "|";
const answerFormats = {
  .00: `You got ${splitter} ... yikes`,
  .33: `Hey, ${splitter} isn't terrible`,
  .66: `${splitter}: not - too - shabby`,
};

const styles = theme => ({
  btn,
});

class Results extends React.Component {
  render () {
    // get scoring variables
    const { answers, classes } = this.props;
    const total = answers.length;
    const correct = answers.reduce((acc, curr) => acc + curr, 0);
    const scoreString = this.formatResult(correct / total)
      .split(splitter);

    return (
      <div className="results">
        <div className="content">
          <h2 className="content__title">Results</h2>

          <div className="content__body">
            <div className="results__output">
              {scoreString[0]}
              <span className="results__score">{correct} / {total}</span>
              {scoreString[1]}
            </div>

            <Button
              className={classNames(classes.btn)}
              color="primary"
              onClick={this.handleClick}
              variant="contained"
            >
              play again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  formatResult = score => {
    // convert keys to numerics
    const keys = Object.keys(answerFormats).map(k => +k);

    // find format string
    let str = "";
    for (let i = keys.length - 1; -1 < i; --i) {
      if (keys[i] <= score) {
        str = answerFormats[String(keys[i])];
        break;
      }
    }

    // return formatted string
    return str;
  };

  handleClick = e => {
    this.props.setDisplay(DISPLAY_MENU);
  };
};

const mapStateToProps = ({ questions }) => ({
  answers: questions.answers,
});

const mapDispatchToProps = {
  setDisplay,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Results); 
