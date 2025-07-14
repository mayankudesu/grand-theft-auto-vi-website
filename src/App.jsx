import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Highlight from "./components/Highlight"
import FirstSlider from "./components/FirstSlider"
import Jason from "./components/Jason"
import SecondSlider from "./components/SecondSlider"
import Lucia from "./components/Lucia"
import PostCard from "./components/PostCard"


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
    <Navbar />
    
    <Hero />

    <Highlight />

    <FirstSlider />
    <Jason />

    <SecondSlider />
    <Lucia /> 

    <PostCard />
    </main>
  )
}

export default App
