'use client';

import { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // If mobile menu is open, prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/services", text: "Services" },
    { href: "/faq", text: "FAQ" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Background that appears when scrolled */}
      <div 
        className={`absolute top-0 left-0 w-full h-full bg-[#090A1E]/95 backdrop-blur-md shadow-lg
          transition-opacity duration-500
          ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      ></div>
      
      {/* Container with padding */}
      <div className={`w-full transition-all duration-500 ${isScrolled ? '' : 'pt-4'}`}>
        {/* Floating navbar */}
        <div 
          className={`relative mx-auto bg-[#090A1E]/95 backdrop-blur-md font-grotesk shadow-lg
            transition-all duration-500
            ${isScrolled ? 'rounded-none max-w-none py-3' : 'rounded-xl max-w-7xl py-4'}
          `}
        >
          {/* Inner content container */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
            <Link href="/" className="text-white text-xl font-bold z-10 relative">
              <Image 
                src="/images/Stillwater2.svg" 
                alt="Stillwater Web Development" 
                width={140} 
                height={0} 
                priority
                className="drop-shadow-[0_0_15px_rgba(60,145,230,0.8)]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-white hover:text-royalbyte-300 transition-colors py-2"
                >
                  {link.text}
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden text-white z-30 p-2 focus:outline-none relative"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'} top-2`}></span>
                <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel with animation */}
      <div 
        className={`fixed inset-0 bg-[#07081A]/95 backdrop-blur-xl z-10 flex flex-col items-center justify-center
          transition-all duration-500 ease-in-out transform 
          ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          md:hidden
        `}
        onClick={() => setMobileMenuOpen(false)}
      >
        <nav className="flex flex-col items-center space-y-8 px-6" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-2xl font-semibold text-white hover:text-royalbyte-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-10 left-0 w-full text-center text-sm text-royalbyte-300" onClick={(e) => e.stopPropagation()}>
          <p>© {new Date().getFullYear()} Stillwater Web Development</p>
        </div>
      </div>
    </div>
  );
});

export default Navbar; 