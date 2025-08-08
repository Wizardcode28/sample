import React from 'react'
import "./Contact.css"
import { useState } from 'react'
const Contact = () => {
  const [insta, setInsta] = useState(false)
  const [face, setFace] = useState(false)
  const [link, setLink] = useState(false)
  const defaultInsta="Images/instagram-svg.png"
  const hoverInsta="Images/instagram.png"
  const defaultFace="Images/facebook-svg.svg"
  const hoverFace="Images/facebook.svg"
  const defaultLink="Images/linkedin-svg.svg"
  const hoverLink="Images/linkedin.svg"
  return (
  <div className='contactcontainer'>
    <div className="contacts">
      <div className="leftcontacts" data-aos="fade-left">
        <div className="heading">Contact Us</div>
        <div className='mobile cdetailcont'>
          <img src="Images/phone.svg" alt="" />
          <div className="cdetails">
            <div className="cdetail">
              <p>Abhinav Rai</p> 
              <a href="tel:+917909474088">+91 7909474088</a>
            </div>
            <div className="cdetail">
              <p>Vanshika Agarwal</p> 
              <a href="tel:+919828534432">+91 9828534432</a>
            </div>
          </div>
        </div>
        <div className='location cdetailcont'>
          <img src="Images/location1.png" alt="" />
          <a  href="https://maps.app.goo.gl/ZERHwrJJcutMMMig8" target=" " className="cdetails">Maulana Azad National Institute of Technology Bhopal, 462003 (M.P.)</a>
        </div>
        <div className="gmail cdetailcont">
          <img src="Images/mail.svg" alt="" />
          <a href="mailto:istescmanit@gmail.com" className="cdetails">istescmanit@gmail.com</a>
        </div>
      </div>

      <div className="rightcontacts" data-aos="fade-right" data-aos-delay="200">
        <div className="heading">Social Links</div>

        <div className='media cdetailcont' 
          onMouseEnter={()=>setInsta(true)}
          onMouseLeave={()=>setInsta(false)}
          >
          <a href="https://www.instagram.com/istemanit/">
          <img src={insta?hoverInsta: defaultInsta} alt=""/>
          </a>
            <a href="https://www.instagram.com/istemanit/">Instagram</a>
        </div>

        <div className='media cdetailcont'
          onMouseEnter={()=>setFace(true)}
          onMouseLeave={()=>setFace(false)}
          >
          <a href="https://www.facebook.com/ISTESCMANIT">
          <img src={face?hoverFace: defaultFace} alt="" />
          </a>
          <a href="https://www.facebook.com/ISTESCMANIT">Facebook</a>
        </div>

        <div className="media cdetailcont"
          onMouseEnter={()=>setLink(true)}
          onMouseLeave={()=>setLink(false)}
          >
          <a href="https://www.linkedin.com/company/iste-sc-manit/">
          <img src={link?hoverLink: defaultLink} alt="" className='linkedin' />
          </a>
          <a href="https://www.linkedin.com/company/iste-sc-manit/">LinkedIn</a>
        </div>
      </div>
    </div>
      <div className='other'>
        <hr />
        <div className='otherdiv'>
          <a href="https://devfolio.co/code-of-conduct" target="blank">Code of Conduct Devfolio</a>
          <a href="/Images/VBrulebook-2024.pdf" target="blank">Rule Book</a>
        </div>
        <hr />
          <div>
          Copyright © 2025 by <span className='istename'><a href="https://www.istemanit.in/" target='_blank'>ISTE-SC MANIT</a></span>. All rights reserved.
          </div>
      </div>
    
  </div>
  )
}

export default Contact
