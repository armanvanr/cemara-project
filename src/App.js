import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import AdoptPage from './Pages/AdoptPage';
import DashboardReport from './Pages/Dashboard/ReportPage';
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {
          currentUser ?
          <>
            <Route path="/dashboard/report" element={<DashboardReport />} />
            <Route path="/dashboard/adopt" element={<DashboardReport />} />
          </>
          : null
        }
      </Routes>
    </div>
  );
}

export default App;
