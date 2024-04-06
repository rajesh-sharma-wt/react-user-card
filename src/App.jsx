import { useState } from 'react'
import json from './assets/files/user.json'
import { UserCard } from './components/UserCard.jsx'

function App() {
  return (<UserCard {...json} />)
}

export default App
