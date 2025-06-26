import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className="py-4 shadow-md bg-white text-gray-800 dark:bg-transparent dark:text-white transition-colors duration-300 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-6">
            <Link to="/">
              <Logo width="45px" />
            </Link>
          </div>
          <ul className="flex items-center gap-4 ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-5 py-2 text-sm rounded-full font-medium tracking-wide 
                           hover:bg-indigo-100 dark:hover:bg-indigo-900 
                           hover:text-indigo-700 dark:hover:text-indigo-300 
                           transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header