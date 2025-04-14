import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Homes from './Home/Homes.jsx';
import About from './Home/About.jsx';
import Portfolio from './Home/Portfolio.jsx';
import Contacts from './Home/Contacts.jsx';
import Services from './Home/Services.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children : [
      { index:true, Component: Homes },
      {path:'about', Component: About},
      {path:'services', Component: Services},
      {path:'portfolio', Component: Portfolio},
      {path:'contact', Component: Contacts}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
