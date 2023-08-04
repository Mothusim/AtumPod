import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material';


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

export default function ShowCard({show}) {

    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {

        position: 'absolute',
        backgroundColor: '#296647',
        color: 'white',
        padding: '0 4%  0 4%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '70%',
        overflowY: 'scroll',
        textAlign:"center",
        
        boxShadow: 24,
        [theme.breakpoints.up('sm')]: {
            height: '70%',
            width: '70%',
        },

        [theme.breakpoints.up('md')]: {
            height: '70%',
            width: '50%',
        }
    };

    return (

        <Grid item xs={12} sm={6} md={3} lg={2} >

            <Card sx={{borderBottom: '5px solid #296647'}}>

                <CardHeader
                
                    title={show.title}
                    subheader = {'Last updated: ' + new Date(show.updated).toISOString().substring(0, 10)}
                    sx={{bgcolor:'#296647',  height: { xs: 50, md: 90 }}}
                    titleTypographyProps={{

                        variant: 'h5',
                        fontSize: {xs:'1em', sm: '1em', lg: '1.25em'},
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        mb:1

                    }}

                    subheaderTypographyProps={{

                        color: 'white',
                        fontSize: {xs:'0.7em', sd: '1em', lg: '1.25em'}

                    }}
                />

                <CardMedia

                    component="img"
                    sx={{ height: { xs: 200, sm:220, md: 350 } }}
                    onClick={show.click}
                    image={show.image}
                    alt="Paella dish"

                />

                <CardContent>

                    <Typography variant="body2" color="text.secondary">

                        {show.description.substring(0, 101)}

                    </Typography>

                    <Typography id="modal-modal-description" sx={{ padding: '50 2 2 4'}}>

                        {`Seasons: ${show.seasons}`}

                    </Typography>

                </CardContent>

                {/* <Modal

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                        
                >
                    <Box>

                        <Box sx={style}>

                            <Typography sx={{position: 'sticky', top: 0, color: 'white', fontSize: '2em', backgroundColor: '#296647',}} id="modal-modal-title" variant="h6" component="h2">
                                {show.title}
                            </Typography>

                            <img className='hey' style={{position: 'sticky', top: 42}} src={show.image} alt={show.title} ></img>

                    
                            <Typography id="modal-modal-description" sx={{ p: '6 4 4 4', marginTop: 40}}>
                                {show.description}
                            </Typography>

                        </Box>

                        <Button variant='secondary' sx={{position: 'absolute', bottom: '16%', left: '47%', backgroundColor: 'white', color: 'black', width: '10%', height: '5%'}} onClick={handleClose} >Close</Button>

                    </Box>

                </Modal> */}

                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between'  }}>

                    <Rating

                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            
                    />

                    {/* <Button variant='text' color='success' onClick={handleOpen} >More info</Button> */}

                </CardActions>

            </Card>

        </Grid>

    );
}
  