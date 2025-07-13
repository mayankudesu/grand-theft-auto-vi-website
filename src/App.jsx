import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlight from "./components/Highlight"
import FirstSlider from "./components/FirstSlider"


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
    <Navbar />
    <Hero />
    <Highlight />
    <FirstSlider />
    </main>
  )
}

export default App
