import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextprovider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextprovider>
      <h1>miniContext</h1>
      <Login />
      <Profile />
    </UserContextprovider>
  )
}

export default App
