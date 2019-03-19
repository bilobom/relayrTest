import { combineReducers } from "redux";


const deviceReducer=(state=[],action)=>{
    switch (action.type) {
        case 'UPDATE_DEVICE_READINGS':
                return [...action.payload]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    deviceReadings: deviceReducer
});
export default rootReducer;