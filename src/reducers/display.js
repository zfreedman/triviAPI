import {
  DISPLAY_MENU,
  DISPLAY_QUESTIONS,
  DISPLAY_RESULTS,
  SET_DISPLAY,
} from "../actions/display";

export default function display (state = {}, action) {
  switch (action.type) {
    case SET_DISPLAY:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}
