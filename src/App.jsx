import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
function App() {
  const isAuth = true
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route
            path="/"
            element={isAuth ? <Home /> : <Login />}
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
