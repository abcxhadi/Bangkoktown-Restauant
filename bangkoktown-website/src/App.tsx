
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, MenuPage } from './pages';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { ResponsiveNavigation, Footer } from './components/layout';

function App() {
  const [loading, setLoading] = useState(true);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false); // New state for player visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <LoadingScreen />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {!isPlayerOpen && <ResponsiveNavigation />} {/* Conditionally render */}
        <Routes>
          <Route path="/" element={<HomePage setIsPlayerOpen={setIsPlayerOpen} />} /> {/* Pass setter */}
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
