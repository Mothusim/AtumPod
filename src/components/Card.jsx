import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';

function Card({show}){ 

    return(

        <div className="cards">

            <Link className='jj' to={show.id}>

                <img className="movie__image" src={show.image} alt={show.title} />

            </Link>

            <div className="flex__card">

                <p className="head">{show.title}</p>
                <p className="paragraph">{'Last updated: ' + new Date(show.updated).toISOString().substring(0, 10)}</p>
                <p className="paragraph">{`Seasons: ${show.seasons}`}</p>

            </div>

        </div>
 
    )
    
}

export default Card;