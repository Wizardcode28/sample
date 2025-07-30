import { useState , useRef , useEffect} from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import Schedule from './components/schedule/schedule'
import About from './components/about/about'
import Prizes from './components/Prizes/prizes'
import Gallery3 from './components/gallery/gallery'
import Sponsors from './components/sponsors/sponsors'
import Faqs from './components/faqs/faqs'
import Footer from './components/footer/footer'
import Loader from "./components/loader/Loader.jsx"
function App() {
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = "public/Images/hllo3.png";
  // }, []);
  
  useEffect(()=>{
    const timer= setTimeout(()=>{
      setLoading(false)
    },5000)
  return ()=>clearTimeout(timer)
},[])


  const lightRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    })
  },[])

  return (
    <div className='maincontainer' ref={containerRef}>
    {
      loading? <Loader/>
      :
      (  
        <>
        <div ref={lightRef} className="cursor-light"/>
        <Navbar/>
        <Hero/>
        <About/>
        <div className='transition-bridge'></div>
        <Schedule/>
        <Prizes/>
        <Gallery3/>
        <Sponsors/>
        <Faqs/>
        <Footer/>
        </>
        )}
    </div>

  )
}

export default App
