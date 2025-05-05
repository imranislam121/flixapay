import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, NavLink } from 'react-router-dom';
import Notice from '@/pages/Notice';
import ComingSoon from '../ComingSoon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when a menu item is clicked
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };
  console.log(comingSoon)

  return (


    <>
      <ComingSoon isOpen={comingSoon} onClose={() => setComingSoon(false)} />
      <header
        className={`fixed w-full z-50 transition-all duration-300 bg-[#161635] `}
      >

        <Notice />
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img
                src="/flixapay-full.png"
                alt="FlixaPay Logo"
                className="h-7 mr-2"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-pink-500' : 'hover:text-pink-500 text-white '}`

              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-pink-500' : 'hover:text-pink-500 text-white '}`}
            >
              Services
            </NavLink>
            <NavLink
              to={"/mission"}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-pink-500' : 'hover:text-pink-500 text-white '}`}
            >
              Mission
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `transition-colors ${isActive ? 'text-pink-500' : 'hover:text-pink-500 text-white '}`}
            >
              About Us
            </NavLink>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Button onClick={() => setComingSoon(true)} variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Button onClick={() => setComingSoon(true)} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90">
                Sign Up
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-pink-500 hover:text-purple-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#161635] px-4 py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block ${isActive ? 'text-pink-500' : 'hover:text-pink-400 text-white'}`
              }
              onClick={handleMobileMenuClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block ${isActive ? 'text-pink-500' : 'hover:text-pink-400 text-white'}`
              }
              onClick={handleMobileMenuClick}
            >
              Services
            </NavLink>
            <NavLink
              to="/mission"
              className={({ isActive }) =>
                `block ${isActive ? 'text-pink-500' : 'hover:text-pink-400 text-white'}`
              }
              onClick={handleMobileMenuClick}
            >
              Mission
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block ${isActive ? 'text-pink-500' : 'hover:text-pink-400 text-white'}`
              }
              onClick={handleMobileMenuClick}
            >
              About Us
            </NavLink>
            <Button onClick={() => setComingSoon(true)} variant="outline" className="w-full border-pink-500 text-pink-500 hover:bg-pink-50">
              Login
            </Button>
            <Button onClick={() => setComingSoon(true)} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90">
              Sign Up
            </Button>
          </div>
        )}

      </header>
    </>

  );
};

export default Header;
