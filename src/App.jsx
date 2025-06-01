

import './App.css'

// 2 -reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

// 4 -navegando entre paginas 
import Navbarra from './Componetes/Navbarra'

function App() {

  return (
    <>
      <Navbarra/>
      <h>react router</h>
      <Outlet/>
    </>
  )
}

export default App