import React from 'react'
import { useState,useEffect,useRef} from 'react'
import "./prizes.css"

const Prizes = () => {
  const [hasRained,setHasRained]= useState(false)
  const prizeRef = useRef(null)
  useEffect(() => {
    // ensure confetti is available
    if (typeof confetti !== 'function') return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasRained) {
          setHasRained(true)
          const rainDuration = 3000 // milliseconds
          const rainEnd = Date.now() + rainDuration;

          (function frame() {
            confetti({
              particleCount: 2,
              startVelocity: 0,
              spread: 360,
              ticks: 200,
              origin: { x: Math.random(), y: Math.random() - 0.2 },
              colors: ['#bb0000', '#ffffff'],
            })
            if (Date.now() < rainEnd) {
              requestAnimationFrame(frame)
            }
          })()
        }
      })
    }, { threshold: 0.5 })

    if (prizeRef.current) observer.observe(prizeRef.current)

    return () => {
      if (prizeRef.current) observer.unobserve(prizeRef.current)
    }
  }, [hasRained])

  return (
    <div id='prizecontainer' ref={prizeRef}>

      <canvas id='confetti-canvas'></canvas>
      <div className="prizescontent">
         <div className="abouttitle">Prizes</div>
         <div className="prizes">
          <div className="second prize">
              <img src="/Images/second.png" data-aos="fade-up" data-aos-delay="200" alt="" />
              <div className='pricetag'>₹ 10000</div>
          </div>
          <div className="one prize">
              <img src="/Images/one.png" data-aos="fade-up" data-aos-delay="400" alt="" />
              <div className='pricetag'>₹ 15000</div>
          </div>
          <div className="third prize">
              <img src="/Images/third.png" data-aos="fade-up" data-aos-delay="600" alt="" />
              <div className='pricetag'>₹ 5000</div>
          </div>
         </div>
      </div>
    </div>
  )
}
export default Prizes