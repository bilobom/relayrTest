import { getDeviceReadings, toggleState } from '../api-client'



/*********************Backend actions *********************/
    export const dispatchGetDeviceReadings=()=>async dispatch=>{
        try {
            const response= await getDeviceReadings()
            dispatch(updateDeviceReadings(response.data))
        } catch (error) {
            dispatch(info({
                message:'Error retieving device Readings',
                variant:'error'
            }))
            console.log('Error retrieving device readings')
        }
    } 
export const dispatchToggleState = (readingName, stateValue) => async dispatch=>{
        try {
            await toggleState(readingName, stateValue)
            dispatch(dispatchGetDeviceReadings())
        } catch (error) {
            console.log("Error toggling reading's status")
            dispatch(info({
                message:"Error toggling reading's status, retring...",
                variant:'error'
            }))
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
    export const info = (msg)=>{
        return{
            type:'INFO',
            payload: msg
        }
    }

/**********************************************************/