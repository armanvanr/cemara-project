import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL_GLITCH;
const LOCAL_URL = 'http://localhost:3030';

const daReportSend = (report) => {
    const data = axios.post(`${LOCAL_URL}/report`, report);
    return data;
};

const arReportSend = (report) => {
    const data = axios.post(`${LOCAL_URL}/report`, report);
    return data;
};

const reportService = {
    daReportSend,
    arReportSend
};

export default reportService;