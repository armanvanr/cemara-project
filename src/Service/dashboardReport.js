import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = process.env.REACT_APP_API_URL_LOCAL;
// const API_URL = process.env.REACT_APP_API_URL_GLITCH;

// console.log(API_URL)

const getReport = () => {
    return axios.get(`${API_URL}/report`)
}
const postReport = ({ reportType, animalType, animalName, imageUrl, addInfo, name, email, phoneNumber, address, province, city, communityList }) => {
    return axios.post(`${API_URL}/report/ar`, {
        reportType,
        animalType,
        animalName,
        imageUrl,
        addInfo,
        name,
        email,
        phoneNumber,
        address,
        province,
        city,
        communityList
    })
}

const updateStatusReport = (id, type) => {
    console.log(id);
    return axios.post(`${API_URL}/report/update-status`, { id, type })
}

const dashboardReportAPI = {
    getReport,
    postReport,
    updateStatusReport
}

export default dashboardReportAPI