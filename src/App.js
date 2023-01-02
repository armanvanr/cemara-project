import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdoptPage from './Pages/AdoptPage';
import Dashboard from './Pages/Dashboard';
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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
