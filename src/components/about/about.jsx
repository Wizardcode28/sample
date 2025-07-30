import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='aboutcontainer aboutfade' id="about">
      <div className='abouttitle mt-10'>About</div>
      <div className="cont">
        <img src="/Images/students.png" className='about' data-aos="zoom-in" alt="" />
        <div className='details'><span className='versionbeta'>Version Beta</span> is the amalgamation of some of the nation's greatest technological minds, with an ideal platform for technology enthusiasts to demonstrate their talents and ingenuity. After successfully organizing its digital variation for the last two years we are back this year, grander than ever, to build on the legacy of our offline editions. To bring you an array of diverse activities, we have included synchronized delivery of workshops, and guest speakers of the highest caliber from the world of technology and entrepreneurship. It is accompanied by a 36-hour hack-a-thon powered by MLH, the largest in central India, allowing participants to test their intelligence, be recognized and get rewarded while rubbing shoulders with the offline NIT-B campus experience and real-time guidance from the MLH community. In a stroke, Version Beta is the souls' satisfiers of tech aficionados while fostering the next generation of developers, thinkers, and entrepreneurs.</div>
      </div>   
    </div>
  )
}

export default About
  