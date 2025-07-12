import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlight from "./components/Highlight"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
    <Navbar />
    <Hero />
    <Highlight />
    </main>
  )
}

export default App
