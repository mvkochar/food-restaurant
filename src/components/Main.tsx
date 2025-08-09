import { Route, Routes } from "react-router-dom"
import { Home, Menu } from "../pages"


const Main = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="menu"
        element={<Menu />}
      />
    </Routes>
  )
}

export default Main