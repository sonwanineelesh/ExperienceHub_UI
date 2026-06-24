import { useEffect, useState } from 'react'
import Login from './app/login.jsx'
import Register from './app/register.jsx'
import Dashboard from './app/dashboard.jsx'
import './App.css'

const resolvePageFromLocation = () => {
  const hash = window.location.hash.replace('#', '').toLowerCase()
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase()

  if (hash === 'register' || path === 'register') {
    return 'register'
  }
  if (hash === 'dashboard' || path === 'dashboard') {
    return 'dashboard'
  }

  return 'login'
}

function App() {
  const [page, setPage] = useState(() => resolvePageFromLocation())
  const [userName, setUserName] = useState('Neelesh')

  useEffect(() => {
    const updateRoute = () => setPage(resolvePageFromLocation())
    window.addEventListener('hashchange', updateRoute)
    window.addEventListener('popstate', updateRoute)

    return () => {
      window.removeEventListener('hashchange', updateRoute)
      window.removeEventListener('popstate', updateRoute)
    }
  }, [])

  const routeTo = (nextPage) => {
    const target = nextPage || (page === 'login' ? 'register' : 'login')
    const targetHash = `#${target}`
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash)
    }
    setPage(target)
  }

  const handleLogin = (email) => {
    const name = email?.split('@')?.[0] || 'Neelesh'
    setUserName(name.charAt(0).toUpperCase() + name.slice(1))
    routeTo('dashboard')
  }

  if (page === 'dashboard') {
    return <Dashboard userName={userName} />
  }

  if (page === 'register') {
    return <Register onSwitchPage={() => routeTo('login')} onLogin={handleLogin} />
  }

  return <Login onSwitchPage={() => routeTo('register')} onLogin={handleLogin} />
}

export default App
