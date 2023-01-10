import axios from 'axios';

const API_URL = 'https://cemara-project-backend.vercel.app/api';

const getReport = () => {
    return axios.get(`${API_URL}/report`)
}

const dashboardReportAPI = {
    getReport,
}

export default dashboardReportAPI