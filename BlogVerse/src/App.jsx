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
      <div
        className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900 dark:bg-black dark:text-white transition-colors duration-300"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full bg-black/50 backdrop-blur-sm">
          <Header />
        </div>

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-violet-200 dark:from-black dark:to-gray-900 transition-colors duration-300">
      <h1 className="text-xl text-black font-semibold animate-pulse">
        Loading BlogVerse...
      </h1>
    </div>
  );

}

export default App
