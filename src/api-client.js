import axios from 'axios'


export const getDeviceReadings = async () => {
    
    const response = await axios.get('/device')
    if(response.status === 200) return response.data
    throw new Error('Error geting Readings')

}

export const toggleState = async (readingName, stateValue) => {

    const response = await axios.patch('/device/' + readingName + '?active=' + stateValue)
    if(response.status === 200) return response.data
    throw new Error('Error toggling reading status')

}