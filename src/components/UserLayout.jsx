import { NavLink, Outlet } from "react-router-dom"

export default function UserLayout() {

    const activeStyles = {

        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",

    }

    return (

        <>

            <nav className="user-nav">

                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="shows"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    All Shows
                </NavLink>

                <NavLink
                    to="Favourites"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Favourites
                </NavLink>
                

                {/* <NavLink
                    to="reviews"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink> */}

            </nav>

            <Outlet />

        </>

    )
    
}