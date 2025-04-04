import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">StoryTeller</h3>
            <p className="text-gray-400">
              A platform for creative minds to share stories, connect with others, and discover new worlds.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="#home" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="#blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    d="M22 12.1c0 5.5-4.5 9.9-10 9.9S2 17.6 2 12.1 6.5 2.2 12 2.2c5.5 0 10 4.4 10 9.9zm-12.5-2.6h2.5V9.2h-2.5v3.2zm1.2 9.1c0 1.2-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1v-5.2h2.1v5.2zm-1.2-8.7c-.9 0-1.5-.6-1.5-1.5s.6-1.5 1.5-1.5 1.5.6 1.5 1.5-.6 1.5-1.5 1.5z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    d="M22.46 6c-.79.35-1.63.59-2.53.7.91-.55 1.61-1.42 1.94-2.47-.85.5-1.79.87-2.79 1.06-.81-.86-1.98-1.4-3.28-1.4-2.48 0-4.48 2.01-4.48 4.48 0 .35.04.69.1 1.02C7.69 9.1 4.1 7.37 1.67 4.12c-.35.6-.56 1.29-.56 2.02 0 1.4.71 2.64 1.79 3.36-.66-.02-1.29-.2-1.83-.5v.05c0 1.95 1.38 3.58 3.21 3.95-.34.1-.7.15-1.07.15-.26 0-.51-.02-.75-.07.51 1.59 1.99 2.74 3.74 2.77-1.38 1.08-3.14 1.73-5.04 1.73-.33 0-.66-.02-.99-.06C3.73 18.6 6.47 20 9.61 20c11.53 0 17.88-9.56 17.88-17.88 0-.27 0-.54-.02-.8.72-.53 1.36-1.19 1.85-1.96z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    d="M12 2.2c3.33 0 3.75 0 5.07.07 1.15.06 1.96.3 2.41.58.48.29.83.68 1.2 1.05.38.38.77.83 1.05 1.28.28.44.52 1.13.58 2.41.07 1.32.07 1.74.07 5.07s0 3.75-.07 5.07c-.06 1.15-.3 1.96-.58 2.41-.29.48-.68.83-1.05 1.2-.37.38-.84.77-1.28 1.05-.44.28-1.13.52-2.41.58-1.32.07-1.74.07-5.07.07s-3.75 0-5.07-.07c-1.15-.06-1.96-.3-2.41-.58-.48-.29-.83-.68-1.2-1.05-.38-.38-.77-.83-1.05-1.28-.28-.44-.52-1.13-.58-2.41-.07-1.32-.07-1.74-.07-5.07s0-3.75.07-5.07c.06-1.15.3-1.96.58-2.41.29-.48.68-.83 1.05-1.2.37-.38.84-.77 1.28-1.05.44-.28 1.13-.52 2.41-.58C8.25 2.2 8.67 2.2 12 2.2zM12 0C8.75 0 8.33 0 6.88.07 4.84.12 3.31.43 2.1 1.64.89 2.85.58 4.38.58 6.42c0 1.74 0 2.16.07 2.87.06.81.27 1.56.58 2.31.38.94.92 1.77 1.64 2.48.72.72 1.56 1.26 2.48 1.64.75.31 1.5.52 2.31.58 1.22.07 1.14.07 1.47.07 3.47s0 2.25-.07 3.47c-.06.81-.27 1.56-.58 2.31-.38.94-.92 1.77-1.64 2.48-.72.72-1.56 1.26-2.48 1.64-.75.31-1.5.52-2.31.58-1.74.07-2.16.07-2.87.07s-2.16 0-2.87-.07c-.81-.06-1.56-.27-2.31-.58-.94-.38-1.77-.92-2.48-1.64-.72-.72-1.26-1.56-1.64-2.48-.31-.75-.52-1.5-.58-2.31-.07-1.22-.07-1.74-.07-2.87s0-1.74.07-2.87c.06-.81.27-1.56.58-2.31.38-.94.92-1.77 1.64-2.48.72-.72 1.56-1.26 2.48-1.64.75-.31 1.5-.52 2.31-.58C8.33 0 8.75 0 12 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} StoryTeller. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
