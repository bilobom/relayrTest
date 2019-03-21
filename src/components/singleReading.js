import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Typography, Switch, withStyles } from "@material-ui/core";
import { dispatchToggleState } from "../redux/actionCreators";
import { Grid } from "@material-ui/core";

export class singleReading extends Component {
  //toggling device reading state by dispatching the action,
  //The action shall make the appropiate call to the backend
  toggle = ({ target: { checked } }) => {
    const {
      singleReading: { name },
      dispatchToggleState
    } = this.props;
    dispatchToggleState(name, checked);
  };
  render() {
    const {
      singleReading: { name, unit, value, timestamp, active },
      classes
    } = this.props;
    return (
      <div >
        <Paper className={classes.paper}>
          <Grid container spacing={16} className={classes.root}>
            <Grid item container className={classes.paperHeader}>
              {/***********Name **************/}
              <Typography variant="h5" component="h4">
                {name}
              </Typography>
              {/***********Date **************/}
              <Typography>
                {new Date(timestamp).toLocaleString().split(',')[0]}
              </Typography>
            </Grid>

            <Grid item>
              {/***********Value & unit **************/}
              <Typography>
                {`${Math.round(value*100)/100} ${unit}`}
              </Typography>
            </Grid>
            <Grid item container className={classes.paperFooter}>
              {/***********toggle State **************/}
              <Switch
                checked={active}
                onChange={this.toggle}
                value="checked"
                color="primary"
              />
              {/***********Time **************/}
              <Typography>
                {new Date(timestamp).toLocaleString().split(',')[1]}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchToggleState
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    flexDirection:'column'
  },
  paper:{
    padding: 10,
  },
  paperHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  paperFooter:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
});
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(singleReading));
