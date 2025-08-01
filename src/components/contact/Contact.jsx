import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
  <div className='contactcontainer'>
    <div className="contacts">
      <div className="leftcontacts">
        <div className="heading">Contact Us</div>
        <div className='mobile cdetailcont'>
          <img src="Images/phone.svg" alt="" />
          <div className="cdetails">
            <div className="cdetail">Abhinav Rai     +91 7909474088</div>
            <div className="cdetail">Vanshika Agarwal +91 9828534432</div>
          </div>
        </div>
        <div className='location cdetailcont'>
          <img src="Images/location1.png" alt="" />
          <div className="cdetails">Maulana Azad National Institute of Technology Bhopal, 462003 (M.P.)</div>
        </div>
        <div className="gmail cdetailcont">
          <img src="Images/mail.svg" alt="" />
          <div className="cdetails">istescmanit@gmail.com</div>
        </div>
      </div>

      <div className="rightcontacts">
        <div className="heading">Social Links</div>
        <div className='media cdetailcont'>
          <a href="https://www.instagram.com/istemanit/"><img src="Images/instagram.png" alt="" /></a>
          {/* <div className="cdetails"> */}
            <a href="https://www.instagram.com/istemanit/">Instagram</a>
          {/* </div> */}
        </div>
        <div className='media cdetailcont'>
          <a href="https://www.facebook.com/ISTESCMANIT"><img src="Images/facebook.svg" alt="" /></a>
          <a href="https://www.facebook.com/ISTESCMANIT">Facebook</a>
        </div>
        <div className="media cdetailcont">
          <a href="https://www.linkedin.com/company/iste-sc-manit/"><img src="Images/linkedin.svg" alt="" /></a>
          <a href="https://www.linkedin.com/company/iste-sc-manit/">LinkedIn</a>
        </div>
      </div>
    </div>
      <div className='other'>
        <hr />
        <div className='otherdiv'>
          <div>Code of Conduct Devfolio</div>
          <div>Rule Book</div>
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
