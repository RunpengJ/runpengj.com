import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';

/**
 * Main App component with React Router setup
 * Currently uses hash navigation on Home page, 
 * but structure is ready for additional routes
 */
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add future routes here as needed */}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
