import { BrowserRouter, Route, Routes } from "react-router-dom"
import SingleForm from "./pages/singleForm"
import MultipleForms from "./pages/MultipleForms"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SingleForm />} />
      <Route path="/multiplef" element={<MultipleForms />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
