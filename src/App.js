import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdoptPage from './Pages/AdoptPage';
import DashboardReport from './Pages/Dashboard/ReportPage';
import DashboardCampaign from './Pages/Dashboard/Campaign';
import DonatePage from './Pages/DonatePage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ReportPage from './Pages/ReportPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/report" element={<DashboardReport />} />
        <Route path="/dashboard/campaign" element={<DashboardCampaign />} />
      </Routes>
    </div>
  );
}

export default App;
