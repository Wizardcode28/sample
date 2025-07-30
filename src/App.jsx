import { useState , useRef , useEffect} from 'react'
import './App.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
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
  
  useEffect(()=>{
    const timer= setTimeout(()=>{
      setLoading(false)
    },5000)
  return ()=>clearTimeout(timer)
},[])

  useEffect(() => {
    if(!loading){
    AOS.init({
      duration:1000,
      once:true
    })
    setTimeout(() => AOS.refresh(), 0)
  }
  },[loading])

  const lightRef = useRef(null)
  const containerRef = useRef(null)
  
    useEffect(() => {
    const container = containerRef.current
    const light = lightRef.current

    const handleMouseMove = (e) => {
      if (container && light) {
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        light.style.left = `${x}px`
        light.style.top = `${y}px`
        light.style.opacity = 1
      }
    }

    const handleMouseLeave = () => {
      if (light) {
        light.style.opacity = 0
      }
    }

    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className='maincontainer' ref={containerRef}>
      {loading?"":<div ref={lightRef} className="cursor-light"/>}
    {
      loading? <Loader/>
      :
      (  
        <>
        
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
