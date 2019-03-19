import axios from 'axios'


export const getDeviceReadings = async () => {
    try {
        const response = await axios.get('/device')
        return response.data
    } catch (error) {
        console.log("API : Error getting device Readings ", error)
    }
}

export const toggleState = async (readingName, stateValue) => {
    try {
        const response = await axios.patch('/device/' + readingName + '?active=' + stateValue)
        return response.data
    } catch (error) {
        console.log("API : Error toggling readings state ", error)
    }
}