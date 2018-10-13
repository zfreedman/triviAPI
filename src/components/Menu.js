import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { compose } from "redux";
import { connect } from "react-redux";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import btn from "../material/btn";
import { makeAPIRequest } from "../actions/api";

const styles = theme => ({
  btn,
});

class Menu extends React.Component {
  render () {
    const { classes } = this.props;
    // console.log(classes);
    return (
      <div className="menu">
        <div className="content">
          <h2 className="content__title">trivi<span>API</span></h2>

          <div className="content__body">
            <Button
              className={classNames(classes.btn)}
              color="primary"
              onClick={this.handleClick}
              variant="contained"
            >
              Test your knowledge
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount () {
    // console.log(btn);
  }

  handleClick = e => {
    this.props.makeAPIRequest();
  };
};

let mapDispatchToProps = {
  makeAPIRequest,
};

// export default connect(null, mapDispatchToProps)(Menu);
export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(Menu);
