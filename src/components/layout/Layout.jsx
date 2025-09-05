import PropTypes from 'prop-types';
import Navbar from './Navbar';

/**
 * Main layout wrapper component with proper scroll padding for fixed navbar
 */
const Layout = ({ children }) => {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans scroll-pt-20">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;