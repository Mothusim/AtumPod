import { useEffect, useState, createContext } from 'react'
import UseFetch from './components/UseFetch'
import './App.css'
import './index.css'
import AllShows from './Pages/AllShows'
import Signin from './Pages/auth/Login'
import Favourites from './Pages/Favourites'
import Welcome from './Pages/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Download from './Pages/Download'
import { AuthProvider } from './Auth'
import AppLayout from './components/AppLayout'
import About from './Pages/About'
import UserLayout from './components/UserLayout'
import NotFound from './Pages/NotFound'
import UserShows from './Pages/user/UserShows'
import UserShowInfo from './Pages/user/UserShowInfo'
import UserShowDetails from './Pages/user/UserShowDetails'
import UserShowSeasons from './Pages/user/UserShowSeasons'
import Dashboard from './Pages/Dashboard'
export const DataContext = createContext();

export function App() {

  // const [isOnline, setIsOnline] = useState(false)

  const [data, errorStatus, loading] = UseFetch('https://podcast-api.netlify.app/shows');
 

  if (errorStatus === 404) {

    return <h1>Page not found</h1>;

  }

  if (errorStatus) {

    return <h1>There was a problem with the server. Try again later</h1>;
  }

  return (

    <>

    <DataContext.Provider value={{ data }}>
    
      <AuthProvider>
        
        <BrowserRouter>

          <Routes>

            <Route path='/' element={<AppLayout />}>

              <Route index element={<Welcome/>} />
              <Route path="about" element={<About />} />
              <Route path="download" element={<Download />} />
              <Route path='signin' element={<Signin />} />
              <Route path='allshows' element={<AllShows />} />

              

              <Route path='user' element={<UserLayout />}>

                <Route index element={<Dashboard />} />

                <Route path='shows' element={<UserShows />} />

                <Route path="shows/:id" element={<UserShowDetails />}>

                  <Route index element={<UserShowInfo />} />
                  <Route path='seasons' element={<UserShowSeasons />} />

                </Route>

                <Route path='favourites' element={<Favourites />} />

              </Route>

              <Route path="*" element={<NotFound />} />

            
            </Route>

          </Routes>

        </BrowserRouter>
        

      </AuthProvider>

    </DataContext.Provider>
    
    </>

  )

}