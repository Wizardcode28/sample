import React from 'react'
import "./hero.css"
import { useRef,useEffect,useState } from 'react'
import { motion } from "framer-motion"
import Typed from 'typed.js'

const rightcontainervariants={
  initial:{
    y:-30,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:2,
      staggerChildren:0.5
    }
  }
}
const childvariants={
  initial:{
    y:20,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1
    }
  }
}
const leftvariants={
  initial:{
    x:-200,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:2,
    }
  }
}

const Hero = () => {
  const targetDate = new Date("2025-10-18T00:00:00")
  const getTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    const total = Math.max(diff, 0); // Avoid negative values
    return {
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / (1000 * 60)) % 60),
      seconds: Math.floor((total / 1000) % 60),
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTimeLeft();
      setTimeLeft(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  const format = (value) => value.toString().padStart(2, '0');
  

  const el= useRef(null)
  useEffect(() => {
    const typed= new Typed (el.current,{
      strings: ["Crack the Code. Claim the Glory !","Ready to debug Your limits!", "VERSION BETA 8.0"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      showCursor: false,
      // cursorChar: "|"
    }) 
    return () => {
      typed.destroy()
    }
  }, [])
  

  return (
    <div className='herocontainer herofade' id="hero">
      
        <div className="content">
        <motion.div className='left' variants={leftvariants} initial="initial" animate="animate">
          <motion.img src="/Images/version.png" className="version" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} animate={{x:[20,0],opacity:[0,1]}} alt="" />
          <div className="timeline">
            <div className="date">
              <img src="./Images/calendar.png" alt="" />
              <div>Nov 8th - Nov 10th 2024</div>
            </div>  
            <div className="place">
              <img src="./Images/location1.png" alt="" />
              <div>MANIT,Bhopal</div>
            </div>   
          </div>
          {/* <div className='name'>
            <div className='upper'>Version Beta</div>
            <div className='lower'>8.0</div>
          </div> */}
        </motion.div>
        <motion.div className="right" variants={rightcontainervariants} initial="initial" animate="animate" exit={{opacity:0}}>
          <motion.div className='title' variants={childvariants} ref={el}></motion.div>
          <motion.div className='subtitle' variants={childvariants}>Welcome to Version Beta 8.0</motion.div>
          <motion.p className='desc' variants={childvariants}>Enter the arena where bugs fall, and coders rise! Where every error fuels your next breakthrough!</motion.p>
        </motion.div>
      </div>
      
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} animate={{x:[20,0],opacity:[0,1]}} transition={{duration:1}} className='btn'>Apply with Devfolio</motion.button>
        <div className="lowercontent">
          <div className="countdown">
          <div className='time'>{format(timeLeft.days)}</div>
          <div className='colon'>:</div>
          <div className='time'>{format(timeLeft.hours)}</div>
          <div className='colon'>:</div>
          <div className='time'>{format(timeLeft.minutes)}</div>
          <div className='colon'>:</div>
          <div className='time'>{format(timeLeft.seconds)} </div>
          </div>
          <div className="label">
          <div>Days</div>
          {/* <div></div> */}
          <div>Hours</div>
          {/* <div></div> */}
          <div>Minutes</div>
          {/* <div></div> */}
          <div>Seconds</div>
          </div>
        </div>
    </div>
  )
}

export default Hero
