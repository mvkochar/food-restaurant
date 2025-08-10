import { Route, Routes } from "react-router-dom"
import { Contact, Home, Menu, News } from "../pages"


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
      <Route
        path="contact"
        element={<Contact />}
      />
      <Route
        path="news"
        element={<News/>}
      />
    </Routes>
  )
}

export default Main