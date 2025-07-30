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

  // Add/remove a class to the body to prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [menuOpen]);

  return (
    <div className='navcontainer'>
      <div className="navcontent">
        {/* Logo for desktop view */}
        <div className="desktop-logo">
          <motion.img src="/Images/newlogo.png" variants={imgvariants} initial="initial" animate="animate" className='istelogo' alt="logo" />
        </div>

        {/* The navigation menu for mobile and desktop */}
        <motion.div className={`nav ${menuOpen ? "active" : ""}`}>
           {/* Logo for mobile view */}
           <div className="mobile-logo">
              <img src="/Images/newlogo.png" className='istelogo' alt="logo" />
            </div>
          <motion.ul variants={ulvariants} initial="initial" animate="animate">
            <motion.li variants={livariants}><a href="#hero">HOME</a></motion.li>
            <motion.li variants={livariants}><a href="#about">ABOUT</a></motion.li>
            <motion.li variants={livariants}><a href="#schedule">SCHEDULE</a></motion.li>
            <motion.li variants={livariants}><a href="#prizecontainer">PRIZES</a></motion.li>
            <motion.li variants={livariants}><a href="#gallery">GALLERY</a></motion.li>
            <motion.li variants={livariants}><a href="#sponsors">SPONSORS</a></motion.li>
            <motion.li variants={livariants}><a href="#faqs">FAQS</a></motion.li>
          </motion.ul>
        </motion.div>

        {/* Hamburger Menu Icon */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;