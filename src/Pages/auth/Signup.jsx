import { useState } from 'react';
import { useAuth } from '../../Auth';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignUp = () => {

  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {

    e.preventDefault();

    const signUp = await auth.signup(email, password); 

    if (signUp.error) {

      setMessage(signUp.error.message);
    } else {

      setMessage('Account created successfully.');
      navigate('/user');

    }

    setEmail('');
    setPassword('');
    
  };

  return (

    <div id='signupstyle'>

      <h1 style={{textAlign: 'center', paddingTop: '6% ', color: '#57391C'}}>Sign up</h1>
      <Stack style={{height: '50vh', paddingBottomL: '59%'}}>

        <Box 
            component="form" 
            noValidate 
            onSubmit={handleSignUp} 
            sx={{ 
                mt: 1,
                py: 2,
        }}>

          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
          />

          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              sx={{fontSize: '2em'}}
              onChange={(e) => setPassword(e.target.value)}
          />

          <Button 
          variant="contained" 
          fullWidth
          type="submit"
          size="medium"
          sx= {{ 

              fontSize: '0.9rem',
              textTransform: 'capitalize', 
              py: 2,
              mt: 3, 
              mb: 2,
              borderRadius: 0,
              backgroundColor: '#14192d',
              "&:hover": {
                  backgroundColor: '#1e2a5a',
              }
              
          }}>
              Sign Up
          </Button>

          <span>Already signed up?<Link to={'/signin'}>Signin</Link> here!</span>

          {message && <p style={{color: 'red', textAlign: 'center'}}>{message}</p>}

        </Box>

      </Stack>

    </div>

  );

};

export default SignUp;
