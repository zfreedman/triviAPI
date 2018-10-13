import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import {
  answerQuestion,
  incQuestionIdx,
} from "../actions/questions";
import btn from "../material/btn";
import {
  DISPLAY_RESULTS,
  setDisplay,
} from "../actions/display";
import radio from "../material/radio";
import parseString from "../utils/parseString";

const styles = theme => ({
  btn,
  radio,
});

class AnswerForm extends React.Component {
  constructor (props) {
    super(props);
    
    // the below just gives you an array with
    // answers.length many false values, but
    // the function always sets the first answer to
    // have a value of true
    // const radioValues = this.getFalseArrayWithFirstTrue();
    this.state = {
      // radioValues,
      value: this.props.answers[0],
    };
  }

  render () {
    const { classes } = this.props;

    return (
      <div className="question__answers">
        {/* <form
          className="question__answers-form"
          onSubmit={this.handleSubmit}
        >

        {
          this.renderAnswers()
        } */}
        {
          this.renderAnswersMaterial()
        }
        
        <Button
          className={classNames(classes.btn)}
          color="primary"
          onClick={this.handleSubmit}
          variant="contained"
        >
          guess
        </Button>
        {/* </form> */}
      </div>
    );
  }

  componentDidUpdate (prevProps) {
    // if received new props, reset radio values
    if (prevProps !== this.props) {
      // this.setState({ radioValues: this.getFalseArrayWithFirstTrue() });
      this.setState({ value: this.props.answers[0] });
    }
  }

  getFalseArrayForAnswers = () => {
    return " "
      .repeat(this.props.answers.length)
      .split("")
      .map(e => false);
  };

  getFalseArrayWithFirstTrue = () => {
    let arr = this.getFalseArrayForAnswers();
    arr[0] = true;
    return arr;
  }

  handleChangeMaterial = e => {
    this.setState({ value: e.target.value });
  };

  handleRadioChange = i => {
    const radioValues = this.getFalseArrayForAnswers();
    radioValues[i] = true;

    this.setState({ radioValues });
  };

  handleSubmit = e => {
    e.preventDefault();

    // submit answer
    this.props.answerQuestion(this.state.value);
    
    // increment to next question ONLY if not last question
    if (!this.props.isLastQuestion)
      return this.props.incQuestionIdx();
      
    // if we made it to here, it's the last question, so change
    // display state to results
    this.props.setDisplay(DISPLAY_RESULTS);
  };

  // the below code just iteratively sets up
  // controlled component variants for radio buttons
  renderAnswers = () => {
    const { answers } = this.props;
    const { radioValues } = this.state;

    return answers.map((a, i) => {
      const checked = radioValues[i];
      const name = "radio-" + i;
      return (
        <div className="form_group" key={a}>
          <input
            className="form__radio"
            checked={checked ? "checked" : ""}
            id={name}
            name={name}
            onChange={
              () => this.handleRadioChange(i)
            }
            type="radio"
          />

          <label
            className="form__label"
            htmlFor={name}
          >
            {parseString(a)}
          </label>
        </div>
      );
    });
  };

  renderAnswersMaterial = () => {
    const { answers } = this.props;
    const { value } = this.state;
    const { classes } = this.props;
    console.log(classes.radio);

    return (
      <FormControl>
        <RadioGroup
          onChange={this.handleChangeMaterial}
          value={value}
        >
          {
            answers.map((a, i) => {
              const name = "radio-" + i;
              return (
                <FormControlLabel
                  className={classNames(classes.radio)}
                  control={
                    <Radio
                      color="primary"
                    />
                  }
                  label={a}
                  key={name}
                  value={a}
                />
              );
            })
          }
        </RadioGroup>
      </FormControl>
    );
  };
}

const mapStateToProps = ({ questions }) => {
  return {
    isLastQuestion: questions.currIndex === questions.trivia.length - 1,
  };
};

const mapDispatchToProps = {
  answerQuestion,
  incQuestionIdx,
  setDisplay,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(AnswerForm);
