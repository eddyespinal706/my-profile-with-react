import { Outlet } from "react-router-dom"
import Menu from "./components/menu/Menu"

function App() {
  return (
    <>
      <Outlet />
      <Menu />
    </>
  )
}

export default App
