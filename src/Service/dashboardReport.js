import axios from 'axios';  

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = process.env.REACT_APP_API_URL_LOCAL;

// console.log(API_URL)

const getReport = () => {
    return axios.get(`${API_URL}/report`)
}

const dashboardReportAPI = {
    getReport,
}

export default dashboardReportAPI