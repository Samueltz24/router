import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//  -cofiguração router 
import{createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/Home..jsx'
import Contato from './routes/Contato.jsx'
import Erro from './routes/Erro.jsx'

//const router = createBrowserRouter([
//  {
//    path: '/',
//    element: <Home/>
//  },
//  {
//    path:"contato",
//    element: <Contato/>
//  }
//])

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // 3  pagina de erro 
    errorElement: <Erro/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "contato",
        element: <Contato/>
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
