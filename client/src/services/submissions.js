import axios from 'axios'
const baseUrl = '/api/submissions'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const uploadFile = async (data) => {
    const response = await axios.post(baseUrl, data)
    return response.data
}

const services = {
    getAll,
    uploadFile,
}

export default services
