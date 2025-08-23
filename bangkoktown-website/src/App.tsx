
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResponsiveNavigation } from './components/layout';
import { 
  HomePage, 
  MenuPage, 
  AboutPage, 
  ReservationsPage
} from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-thai-cream max-w-screen-2xl mx-auto shadow-top">
        <ResponsiveNavigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/reservations" element={<ReservationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
