import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Typography, Switch } from "@material-ui/core";
import { dispatchToggleState } from "../redux/actionCreators";
export class singleReading extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  toggle = ({target:{checked}} ) => {
    const {singleReading:{name}, dispatchToggleState} = this.props
    dispatchToggleState(name,checked)
  };
  render() {
    const { name, unit, value, timestamp, active } = this.props.singleReading;
    return (
      <div>
        <Paper>
          <Typography variant="h5" component="h3">
            {name}
          </Typography>
          <Typography component="p">
            {
              `${value} ${unit} at ${new Date(timestamp).toLocaleString()}`
            }
          </Typography>
          <Switch
            checked={active}
            onChange={this.toggle}
            value="checked"
            color="primary"
          />
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchToggleState
};

export default connect(
  null,
  mapDispatchToProps
)(singleReading);
