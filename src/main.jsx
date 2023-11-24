
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// rotas
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error404 from './routes/Error404.jsx'
import Home from './routes/Home.jsx'
import Sobre from "./routes/Sobre.jsx"
import Parceiros from './routes/Parceiros.jsx'
import Suporte from './routes/Suporte.jsx'
import Login from './routes/Login.jsx'

const router =createBrowserRouter([
  {path: "/", element:<App/>, errorElement: <Error404/>,
    children:[
      {path: "/", element: <Home/>},
      {path:'/sobre',element:<Sobre/>},
      {path:'/parceiros',element:<Parceiros/>},
      {path:'/suporte',element:<Suporte/>},
      {path:'/login',element:<Login/>}

    ]    
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
