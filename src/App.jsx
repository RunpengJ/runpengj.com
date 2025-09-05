import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

/**
 * Main App component with React Router setup
 * Currently uses hash navigation on Home page, 
 * but structure is ready for additional routes
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add future routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
