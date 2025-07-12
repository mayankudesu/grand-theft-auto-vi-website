import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
    <Navbar />
    <Hero />
    </main>
  )
}

export default App
