import PropTypes from 'prop-types';
import Navbar from './Navbar';

/**
 * Main layout wrapper component
 */
const Layout = ({ children }) => {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      <Navbar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;