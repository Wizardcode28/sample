import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { motion } from "framer-motion";

const imgvariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } }
};

const ulvariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const livariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1 } }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [menuOpen]);

  return (
    <>
      <div className='navcontainer'>
        <div className="navcontent">
          {/* Logo */}
          <div className="desktop-logo">
            <motion.img src="/Images/newlogo.png" variants={imgvariants} initial="initial" animate="animate" className='istelogo' alt="logo" />
          </div>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="desktop-nav">
            <ul>
              <li><a href="#hero">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#schedule">SCHEDULE</a></li>
              <li><a href="#prizecontainer">PRIZES</a></li>
              <li><a href="#gallery">GALLERY</a></li>
              <li><a href="#sponsors">SPONSORS</a></li>
              <li><a href="#faqs">FAQS</a></li>
            </ul>
          </div>

          {/* Hamburger Menu Icon (visible only on mobile) */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu (slides in from the left) */}
      <motion.div className={`nav ${menuOpen ? "active" : ""}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          &times;
        </div>
        <div className="mobile-logo">
            <img src="/Images/newlogo.png" className='istelogo' alt="logo" />
        </div>
        <motion.ul variants={ulvariants} initial="initial" animate="animate">
          <motion.li variants={livariants}><a href="#hero" onClick={() => setMenuOpen(false)}>HOME</a></motion.li>
          <motion.li variants={livariants}><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a></motion.li>
          <motion.li variants={livariants}><a href="#schedule" onClick={() => setMenuOpen(false)}>SCHEDULE</a></motion.li>
          <motion.li variants={livariants}><a href="#prizecontainer" onClick={() => setMenuOpen(false)}>PRIZES</a></motion.li>
          <motion.li variants={livariants}><a href="#gallery" onClick={() => setMenuOpen(false)}>GALLERY</a></motion.li>
          <motion.li variants={livariants}><a href="#sponsors" onClick={() => setMenuOpen(false)}>SPONSORS</a></motion.li>
          <motion.li variants={livariants}><a href="#faqs" onClick={() => setMenuOpen(false)}>FAQS</a></motion.li>
        </motion.ul>
      </motion.div>
      
      {/* New Blur Overlay */}
      {menuOpen && <div className="blur-background-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default Navbar;