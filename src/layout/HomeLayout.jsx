import { Outlet } from "react-router-dom"
import Footer from "../component/footer/Index"
import Navbar from "../component/nevber/Index"


function HomeLayout() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Outlet /></div>
      <div><Footer /></div>

    </div>
  )
}

export default HomeLayout
