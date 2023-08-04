// // src/components/SignUp.js
// import { useState } from 'react';
// import supabase from '/src/supabase'
// import { Navigate } from 'react-router-dom';

// export default function SignUp() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     try {
//       const { user, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         console.error('Error signing up:', error.message);
//       } else {
//         console.log('Signed up successfully:', user);
//         <Navigate to='/signin' />
//       }
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignUp}>Sign Up</button>
//     </div>
//   );
// };

