import React, { use } from 'react'
import './App.css'
import authservice from './appwrite/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = React.useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then(userData => {
        if (userData) {
          dispatch(login({ userData }))
          console.log("Appwrite service :: getCurrentUser :: success", userData);
        } else {
          dispatch(logout())
          console.log("Appwrite service :: getCurrentUser :: no user data found");
        }
      })
      .finally(() => setLoading(false)
      )

  }, [])

  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            TODO:  <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : <div className="loading"> <h1>Loading...</h1></div>

}

export default App
