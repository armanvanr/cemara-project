import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import AdoptPage from './Pages/AdoptPage';
import AboutUsPage from './Pages/AboutUsPage';
import DashboardReport from './Pages/Dashboard/ReportPage';
import DashboardCampaign from './Pages/Dashboard/CampaignPage';
import DashboardAdopt from './Pages/Dashboard/AdoptPage';
import DashboardDonate from './Pages/Dashboard/DonatePage';
import DonatePage from './Pages/DonatePage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ReportPage from './Pages/ReportPage';

function App() {
  const navigate = useNavigate()

  const { user: currentUser } = useSelector(state => state.auth);
  const location = useLocation()


  useEffect(() => {
    if (['/dashboard/report', '/dashboard/adopt'].includes(location.pathname) && !currentUser) {
      navigate('/')
    }
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {
          currentUser ?
          <>
            <Route path="/dashboard/report" element={<DashboardReport />} />
            <Route path="/dashboard/adopt" element={<DashboardAdopt />} />
            <Route path="/dashboard/donate" element={<DashboardDonate />} />
            <Route path="/dashboard/campaign" element={<DashboardCampaign />} />
          </>
          : null
        }
      </Routes>
    </div>
  );
}

export default App;
