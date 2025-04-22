// src/components/Header.jsx
import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];
 const theme='dark'
  const bgColor = theme === 'light' ? 'bg-white/80' : 'bg-gray-900/80';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-800';
  const navTextColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const navHoverColor = theme === 'light' ? 'text-indigo-600' : 'text-indigo-400';

  return (
    <header className={`sticky top-0 z-50 ${bgColor} backdrop-blur-md border-b ${borderColor} shadow-sm `}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.a
          href="#home"
          className={`text-xl font-bold ${theme === 'light' ? 'bg-gradient-to-r from-purple-600 to-indigo-600' : 'bg-gradient-to-r from-purple-400 to-indigo-400'} bg-clip-text text-transparent`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Zaryab Dogar
        </motion.a>

        <div className="flex items-center gap-4">
      

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-700 text-gray-200'}`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.svg
                  key="close"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className={`capitalize ${navTextColor} hover:${navHoverColor} transition relative`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              <motion.span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${theme === 'light' ? 'bg-indigo-600' : 'bg-indigo-400'}`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`md:hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} py-4 px-6 shadow-md`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize ${theme === 'light' ? 'text-gray-600 hover:text-indigo-600' : 'text-gray-300 hover:text-indigo-400'} transition py-2`}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;