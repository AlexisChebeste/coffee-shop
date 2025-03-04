import About from "./components/About"
import Curiosity from "./components/Curiosity"
import Favorites from "./components/Favorites"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Event from "./components/Event"

function App() {
  return (
    <main className="bg-body min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Favorites />
      <Curiosity />
      <Event />
    </main>
  )
}

export default App
