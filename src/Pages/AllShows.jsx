import { DataContext } from '../App';
import { useContext } from 'react';
import ShowCard from '../components/ShowCard';
import Grid from '@mui/material/Grid';

export default function AllShows() {

    const { data } = useContext(DataContext);

    console.log(data)


    const shows = data.map((show) => {

        return <ShowCard show={show} key={show.id} />
    })

    return (

        <>
        <Grid container spacing={5} sx={{ padding: '5% 10%' }}>
            {shows}
        </Grid>
        </>
    )

}