import axios from 'axios'
const baseUrl = '/api/templates'

const generateTemplate = async (_type) => {
    console.log(_type)
    const response = await axios.post(baseUrl, { type: _type })
    return response.data
}

const download = async () => {
    const response = await axios.get(baseUrl, {
        responseType: 'blob',
    })
    return response
}

const services = {
    generateTemplate,
    download,
}

export default services
