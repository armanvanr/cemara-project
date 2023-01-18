import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = process.env.REACT_APP_API_URL_LOCAL;
const API_URL = process.env.REACT_APP_API_URL_GLITCH;

// console.log(API_URL)

const getReport = () => {
    return axios.get(`${API_URL}/report`)
}
const postReport = ({ reportType, animalGroup, animalName, imageUrl, addInfo, reporterName, reporterEmail, reporterPhone, reporterAddress, province, city, community }) => {
    return axios.post(`${API_URL}/report/ar`, {
        reportType,
        animalGroup,
        animalName,
        imageUrl,
        addInfo,
        reporterName,
        reporterEmail,
        reporterPhone,
        reporterAddress,
        province,
        city,
        community
    })
}

const updateStatusReport = (id) => {
    console.log(id);
    return axios.post(`${API_URL}/report/update-status`, { id })
}

const dashboardReportAPI = {
    getReport,
    postReport,
    updateStatusReport
}

export default dashboardReportAPI