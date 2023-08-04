import { useContext } from 'react';
// import { CurrentShowContext } from './UserShowDetails';
import { useOutletContext } from 'react-router-dom';

export default function Seasons() {

    const { currentShow } = useOutletContext()


    // const data = useContext(CurrentShowContext)

    // console.log(data)

    // const seasons = data.currentShow.seasons
    // const hey= seasons.map((season) => {

    //     return(
        
    //         <h5 key={season.id}>{season.title}</h5>
            
    //     )

    // })

    return( 

        <>
        <h1>hey</h1>
</>
    )

} 