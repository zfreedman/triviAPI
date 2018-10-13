import { connect } from "react-redux";
import React from "react";

import {
  DISPLAY_MENU,
  DISPLAY_QUESTIONS,
  DISPLAY_RESULTS,
  setDisplay
} from "../actions/display";
import Menu from "./Menu";
import Question from "./Question";
import Results from "./Results";

class App extends React.Component {
  render () {
    return (
      <div className="app">
        {
          this.renderContent()
        }
      </div>
    );
  }

  componentDidMount () {
    console.log("mounted");
    this.props.setDisplay(DISPLAY_MENU);
  }

  renderContent = () => {
    // render menu, questions, or results
    const { display } = this.props;
    switch (display) {
      case DISPLAY_MENU: return <Menu />

      case DISPLAY_QUESTIONS: return <Question />

      case DISPLAY_RESULTS: return <Results />

      default: return null;
    }
  };
}

const mapDispatchToProps = {
  setDisplay,
};

const mapStateToProps = ({ display, }) => ({
  display: display.value,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
