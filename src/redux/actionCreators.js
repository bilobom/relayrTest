import { getDeviceReadings, toggleState } from '../api-client'
//import store from './store'


/*********************Backend actions *********************/
    export const dispatchGetDeviceReadings=()=>async dispatch=>{
        try {
            const response= await getDeviceReadings()
            dispatch(updateDeviceReadings(response.data))
        } catch (error) {
            console.log('Error retrieving device readings')
        }
    } 
export const dispatchToggleState = (readingName, stateValue) => async dispatch=>{
        //const {}
        try {
            await toggleState(readingName, stateValue)
            dispatch(dispatchGetDeviceReadings())
        } catch (error) {
            console.log("Error toggling reading's status")
        }
    }
/**********************************************************/

/****************State Handler actions  *******************/
    export const updateDeviceReadings = (deviceReadings)=>{
        return{
            type:'UPDATE_DEVICE_READINGS',
            payload: deviceReadings
        }
    }
/**********************************************************/