import { combineReducers } from "redux";

import display from "./display";
import questions from "./questions";

export default combineReducers({
  display, questions,
});
