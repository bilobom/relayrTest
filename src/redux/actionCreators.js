import { getDeviceReadings, toggleState } from "../api-client";

/*********************Backend actions *********************/
export const dispatchGetDeviceReadings = () => async dispatch => {
  try {
    const response = await getDeviceReadings();

    dispatch(updateDeviceReadings(response.data));
  } catch (error) {
    dispatch(
      info({
        message: "Retieving device Readings went Wrong"
      })
    );
  }
};
export function dispatchToggleState(readingName, stateValue) {
  return async function(dispatch) {
    try {
      // inform the user of sending the toggle
      dispatch(
        info({
          message: "sending ..., please wait !"
        })
      );
      // send toggling
      await toggleState(readingName, stateValue);

      //refresh the device readings again
      dispatch(dispatchGetDeviceReadings());

      // inform the user of a succesfull toggling and release the disable from raddio button
      dispatch(
        info({
          message: "Success toggling " + readingName + "   :)",
          disabledRadioButton: false
        })
      );
    } catch (error) {
      console.log("Error toggling reading's status", error);
      //inform the user of error  and release the disable from raddio button
      dispatch(
        info({
          message: "Ooops toggling " + readingName + " went wrong",
          disabledRadioButton: false
        })
      );
    }
  };
}
/**********************************************************/



/****************State Handler actions  *******************/
export const updateDeviceReadings = deviceReadings => {
  return {
    type: "UPDATE_DEVICE_READINGS",
    payload: deviceReadings
  };
};
export const info = msg => {
  return {
    type: "INFO",
    payload: msg
  };
};

/**********************************************************/
