import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

export default function AppLayout() {

    return (
        <div className="AppContainer">

            <NavBar />

            <main>

                <Outlet />

            </main>

            <Footer />

        </div>

    )

}