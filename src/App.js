import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchGetDeviceReadings } from "./redux/actionCreators";
import Grid from "@material-ui/core/Grid";
import SingleReading from "./components/singleReading";
import Info from "./components/info";

class App extends Component {
  componentDidMount() {
    this.props.dispatchGetDeviceReadings();
  }
  componentWillReceiveProps(nextProps) {
    const { deviceReadings,info } = nextProps;
    console.log("deviceReadings", deviceReadings);
    console.log("infos", info);
  }
  render() {
    const { deviceReadings, info } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          {deviceReadings.map((singleReading, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <SingleReading singleReading={singleReading} />
              </Grid>
            );
          })}
        </Grid>
        {info.map((item, index) => 
          <Info key={index} info={item} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deviceReadings: state.deviceReadings,
  info: state.info
});

const mapDispatchToProps = {
  dispatchGetDeviceReadings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
