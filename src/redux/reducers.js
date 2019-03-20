import { combineReducers } from "redux";

const deviceReadingsReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_DEVICE_READINGS":
      return [...action.payload];
    default:
      return state;
  }
};

const infoReducer = (state = [], action) => {
  switch (action.type) {
    case "INFO":
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  deviceReadings: deviceReadingsReducer,
  info: infoReducer
});
export default rootReducer;
