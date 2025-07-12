import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main className="h-screen bg-black text-white">
    <div>
      <h1>Welcome to the soul society</h1>
    </div>
    </main>
  )
}

export default App
