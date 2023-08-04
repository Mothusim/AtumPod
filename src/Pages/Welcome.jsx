import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import headerImg from '../assets/whispers.jpeg'
import Carousels from "../components/Carousel";

export default function Welcome() {

    const CustomBox = styled(Box) (({ theme }) => ({
        // height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    
        paddingTop: theme.spacing(0),
        paddingBlock: 0,
        
        
        backgroundColor: '#864D1E',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));


    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    return(

        <>

           
            <Carousels/>
            <CustomBox component='header'>
                {/*  Box text  */}
                <BoxText 
                component='section'
                padding='15% 0 0 5%'
                height='85vh'
                >
                    <Typography
                    variant='h2'
                    component= 'h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                    }}
                    >
                        Whispers of Atum
                    </Typography>

                    <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                    }}
                    >
                        We have over <span style={{fontWeight: 'bolder', fontSize: '1.5em'}}> 20 </span> shows,
                        with each show having an average of  <span style={{fontWeight: 'bolder', fontSize: '1.5em'}}> 4 </span>
                        seasons, and an average of  <span style={{fontWeight: 'bolder', fontSize: '1.5em'}}> 15 </span>  episodes per season!
                    </Typography>

                

                    <Box>
                        <Button 
                        component = {Link}
                        to = '/signin'
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4, 
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            borderColor: '#14192d',
                            color: '#fff',
                            backgroundColor: '#14192d',
                            "&&:hover": {
                                backgroundColor: "#343a55"
                            },
                            "&&:focus": {
                                backgroundColor: "#343a55"
                            }
                        }}
                        >
                            Sign in
                        </Button>

                        <Button 
                        component={Link} 
                        to={'/allshows'}
                        variant='outlined'
                        sx={{
                            px: 4, 
                            py: 1,
                            fontSize:'0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            color: '#fff',
                            backgroundColor: 'transparent',
                            borderColor: '#fff',
                            "&&:hover": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            },
                            "&&:focus": {
                                color: '#343a55',
                                borderColor: '#343a55',
                            }
                        }}
                        >
                            explore
                        </Button>
                    </Box>
                </BoxText>

                <Box sx={theme => ({
                    [theme.breakpoints.down('md')]:{
                        flex: '1',
                        
                    },
                    [theme.breakpoints.up('md')]:{
                        flex: '1.5',

                
                    },
                })}
                >
                    <img
                    src={headerImg}
                    alt="headerImg"
                    style={{ 
                        width: "100%",
                        height: '85vh'
                        
                    }}
                    />
                </Box>

            </CustomBox>

        </>

                   
    )
    
}