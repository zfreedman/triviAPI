export const DISPLAY_MENU = "DISPLAY_MENU";
export const DISPLAY_QUESTIONS = "DISPLAY_QUESTIONS";
export const DISPLAY_RESULTS = "DISPLAY_RESULTS";
export const SET_DISPLAY = "SET_DISPLAY";

export function setDisplay (display) {
  return {
    type: SET_DISPLAY,
    value: display,
  };
}
