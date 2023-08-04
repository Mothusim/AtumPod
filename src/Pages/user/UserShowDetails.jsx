import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import CircularProgress from "@mui/material/CircularProgress"

export default function UserShowDetails() {

    const { id } = useParams()
    const [currentShow, setCurrentShow] = useState(null)

    const activeStyles = {

        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"

    }

    
    useEffect(() => {

        fetch(`https://podcast-api.netlify.app/id/${id}`)
          .then(response => response.json())
          .then(data => setCurrentShow(data))
          .catch(error => {
            console.error("Error fetching show details:", error);
            
          });

    }, [id]);
        
      
    if (!currentShow) {

        return <CircularProgress style={{margin: 'auto'}} />

    }

    return (

        <section>

            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all shows</span></Link>

            <div className="user-show-detail-layout-container">

                <div className="user-show-detail">

                    <img src={currentShow.image} />
                    
                    <div className="user-show-detail-info-text">

                        <h3>{currentShow.title}</h3>
                        <p>{`seasons: ${currentShow.seasons.length}`}</p>

                    </div>

                </div>

                <nav className="user-show-detail-nav">

                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>

                    <NavLink
                        to="seasons"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Seasons
                    </NavLink>
                    
                </nav>

                <Outlet context={{ currentShow }} />

            </div>

        </section>

    )
    
}