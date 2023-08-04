import { useOutletContext } from 'react-router-dom';

export default function Seasons() {

    const { currentShow } = useOutletContext()

    console.log(currentShow.description)

    return( 

        <>

            <p style={{width: '40%'}} key={currentShow.id}>{currentShow.description}</p>
            

        </>

    )

} 