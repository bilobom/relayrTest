import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchGetDeviceReadings } from "./redux/actionCreators";
import Grid from "@material-ui/core/Grid";
import SingleReading from "./components/singleReading";
import Info from "./components/info";
import { TextField, Chip, withStyles, Typography } from "@material-ui/core";

class App extends Component {
  state = {
    activeN: 0,
    searchName: "",
    deviceReadingsFiltered: []
  };
  //Retrieve the device's state, by dispatching the proper action
  componentDidMount() {
    this.props.dispatchGetDeviceReadings();
  }
  componentWillReceiveProps(nextProps) {
    //populate the local state, used for filtering later on
    const { deviceReadings } = nextProps;
    this.setState({
      activeN: deviceReadings.reduce((accu, { active }) => accu + active, 0),
      deviceReadingsFiltered: deviceReadings
    });
  }
  handleSearch = ({ target: { value } }) => {
    const { deviceReadings } = this.props;
    this.setState({
      searchName: value,
      /*filtering the list of device readings by search */
      deviceReadingsFiltered: deviceReadings.filter(singleReading => {
        return (
          singleReading.name.toLowerCase().search(value.toLowerCase()) !== -1
        );
      })
    });
  };
  render() {
    const { deviceReadingsFiltered, activeN } = this.state;
    return (
      <div className={this.props.classes.main}>
        
        <Grid container justify={"center"} alignItems={"center"} flexDirection={'row'} spacing={24}>
          {/***********Search text Field **************/}
          <Typography variant="h3" gutterBottom>
            welcome to device readings
          </Typography>
          <Grid item md={6}>
            <TextField
              required
              fullWidth
              inputRef={ref => (this.input = ref)}
              InputLabelProps={{
                shrink: true
              }}
              placeholder={"type a reading ..."}
              helperText="Filter device's reading by name"
              id={"outlined-name"}
              label="reading name"
              value={this.state.searchName}
              onChange={this.handleSearch}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Chip
              label={activeN + " active readings "}
            />
          </Grid>
          <Grid container justify={"center"} spacing={24}>
            {/***********list device readings  **************/}
            {deviceReadingsFiltered.map((singleReading, index) => {
              return (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <SingleReading singleReading={singleReading} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {/***********Show snackBar to inform the user **************/}
        <Info />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deviceReadings: state.deviceReadings,
});

const mapDispatchToProps = {
  dispatchGetDeviceReadings
};
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop:50
    },
  },

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
