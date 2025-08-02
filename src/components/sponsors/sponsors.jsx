import React from 'react';
import { motion } from 'framer-motion';
import './sponsors.css';

const Sponsors = () => {
 
  const directions = ['left', 'right'];

  return (
    <div className='sponsorscontainer'>

      <motion.div
        className='abouttitle sponsorstitle'
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Sponsors
      </motion.div>

      <div className="sponsors" id="sponsors">
        {[
          { href: "https://amul.com/index.php", src: "Images/Amul.png" },
          { href: "https://www.imsindia.com/", src: "Images/IMS.png" },
          { href: "https://the-dopamine-store.mini.store/", src: "Images/tps.png" },
          { href: "https://indigg-dev.netlify.app/", src: "Images/Indigg.png" },
          { href: "https://www.omen.com/", src: "Images/Omen.svg" },
          { href: "https://www.hitbullseye.com/", src: "Images/Hitbullseye.png" },
          { href: "https://www.top-one-percent.com/", src: "Images/Top One Percent.png" },
          { href: "https://www.quillaudits.com/", src: "Images/Quillaudits.png" },
          { href: "https://gradvine.com/", src: "Images/Gradvine.png" },
          { href: "https://codingthinker.com/", src: "Images/Coding Thinker.png" },
          { href: "https://learningwhiletravelling.com/", src: "Images/LWT_logo.webp" },
          { href: "", src: "Images/Stubborn Factory.png" },
          { href: "https://devfolio.co/", src: "Images/devfolio.png" },
          { href: "https://ethindia.co/", src: "Images/ethindia.svg" },
          { href: "https://polygon.technology/", src: "Images/polygon.png" },
          { href: "https://stockedge.com/", src: "Images/stockedge.png" },
          { href: "https://aptosfoundation.org/", src: "Images/Aptos.png" },
          { href: "https://www.luzo.app/", src: "Images/luzo1.png" },
          { href: "https://youngskilledindia.com/", src: "Images/ysi.png" },
          { href: "https://gen.xyz/", src: "Images/.xyz.png" },
          { href: "https://www.aceenggacademy.com/", src: "Images/ace.png" },
          { href: "https://shotz.in/", src: "Images/spm.png" },
          { href: "https://0x.day/", src: "Images/0x.Day.png" },
          { href: "https://interviewbuddy.net/", src: "Images/interviewBuddy.webp" },
        ].map((sponsor, i) => (
          <motion.a
            key={i}
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              x: directions[i % 2] === 'left' ? -100 : 100
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
          >
            <img src={sponsor.src} alt="" className="img" loading="lazy" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
