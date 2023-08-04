import { useState } from 'react';
import { useAuth } from '../../Auth';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const signIn = await auth.login(email, password);

    if (signIn.error) {
      setMessage(signIn.error.message);
    } else {
      setMessage('Login link has been sent.');
      history.push('user')
    }

    setEmail('');
    setPassword('');
  
};

  return (
    <div id='loginstyle'>
      
      <h1 style={{textAlign: 'center', paddingTop: '6% ', color: '#57391C'}}>Sign in</h1>


      <Stack style={{height: '50vh', paddingBottomL: '59%'}}>


        <Box 
            component="form" 
            noValidate 
            onSubmit={handleSignIn} 
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
          }}
          >
              Submit
          </Button>

          {message && <p style={{color: 'red', textAlign: 'center'}}>{message}</p>}

        </Box>

      </Stack>

    </div>

  );

};

export default SignIn;


      {/* <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form> */}
