import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";
import { useAuth } from '../Auth';

export default function Footer() {

    const auth = useAuth();

    return (

        <div>

            <Box id='footer' flex='2.5' rowGap={2}>

                <Box alignContent='start' paddingLeft={2}>
            
                    <Typography component='h1' fontSize='1.5em' color='black' fontWeight='bold' padding='1% 0 1% 30%'>Contact us</Typography>

                    <Typography component='p'>

                        <HomeIcon fontSize="small"  />
                        E1036 Masosobane section, Phokeng, 0335
                        
                    </Typography>

                    <Typography component='p'>

                        <CallIcon fontSize="small"/>
                        087348794
                    
                    </Typography>

                    <Typography component='p'>

                        <MailIcon fontSize="small" />
                        mothusim97@gmail.com
                        
                    </Typography>

                </Box>

                <Box>

                    <Typography component='h1' fontSize='1.5em' color='black' fontWeight='bold' textAlign='center'>Go to</Typography>

                    <Box id='footer-nav'>

                        <Link to={'about'}>

                            <Typography component='p' id="linkStyle" paddingLeft={2}> About</Typography>

                        </Link>

                        <Link to={'signin'}>

                            <Typography component='p' id="linkStyle" paddingLeft={2}>{auth.user? 'Signout' : 'Login' }</Typography>

                        </Link>

                        <Link to={'allshows'}>

                            {auth.user? <Typography component='p' id="linkStyle" paddingLeft={2}>All shows</Typography> : null}

                        </Link>

                    </Box>

                </Box>

                <Box>

                <Typography component='h1' fontSize='1.5em' color='black' fontWeight='bold' textAlign='center'>Connect</Typography>
                
                <Box id='media' >

                    <Typography component='p' >

                        <InstagramIcon fontSize="small" />
                        
                    </Typography>

                    <Typography component='p'>

                        <FacebookIcon fontSize="small"/>

                    </Typography>

                    <Typography component='p'>

                        <TwitterIcon fontSize="small" />
                        
                        
                    </Typography>

                </Box>

                </Box>

            </Box>

            <Box textAlign='center' flex='0.5' paddingTop='1%' backgroundColor='#FEEFCE'>

                <Typography component='p' marginTop='20'>@2023. Khepri Holdings Pty(Ltd)</Typography>
            </Box>

        </div>
    )
    
}