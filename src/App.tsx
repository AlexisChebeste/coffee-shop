import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Menu from "./pages/Menu"
import Gallery from "./pages/Gallery"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
