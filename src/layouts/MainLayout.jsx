import { Outlet } from "react-router-dom"
import Header from "../components/common/Header"
import Sidebar from "../components/common/Sidebar"

const MainLayout = () => {
  return (
    <main className="grid grid-rows-[56px_1fr] ">
      <Header/>
        <section className="grid grid-cols-[250px_1fr]">
         <Sidebar/>
            <section>
                <Outlet/>
            </section>

        </section>
      
    </main>
  )
}

export default MainLayout
