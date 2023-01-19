import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL_GLITCH;
// const API_URL = process.env.REACT_APP_API_URL_LOCAL;
const LOCAL_URL = 'http://localhost:3030';

const daReportSend = (report) => {
    const data = axios.post(`${API_URL}/report/da`, report);
    return data;
};

const arReportSend = (report) => {
    console.log(API_URL);
    const data = axios.post(`${API_URL}/report/ar`, report);
    return data;
};

const reportService = {
    daReportSend,
    arReportSend
};

export default reportService;