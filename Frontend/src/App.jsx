import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MonitorPage from './pages/Moniter';
import DocumentDetails from './pages/DocumentDetails';
import Navbar from "./components/navbar"

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<MonitorPage />} />
        <Route path="/documents/:id" element={<DocumentDetails />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
