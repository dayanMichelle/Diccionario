import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomePage } from "./components/organisms/homePage/HomePage"
import './index.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<HomePage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
