import PropTypes from 'prop-types';
import { siteConfig } from '../../data/config';

/**
 * Navigation bar component with smooth scroll to sections
 */
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold text-teal-600">{siteConfig.name}</div>
      <div className="flex gap-6 text-slate-700 font-medium">
        {siteConfig.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-teal-600 transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;