import axios from "axios";

import {
  DISPLAY_QUESTIONS,
  setDisplay,
} from "./display";
import { setQuestions, } from "../actions/questions";

export function makeAPIRequest () {
  // return thunk
  return dispatch => {
    // fetch data
    axios.get("https://opentdb.com/api.php?amount=10").then(resp => {
      // dispatch new questions
      dispatch(setQuestions(resp.data.results));
      // change display state
      dispatch(setDisplay(DISPLAY_QUESTIONS));
    });
  };
}
