

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResponsiveNavigation } from './components/layout';
import { 
  HomePage, 
  MenuPage
} from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen max-w-screen-2xl mx-auto shadow-top">
        <ResponsiveNavigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

