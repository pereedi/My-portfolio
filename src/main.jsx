import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjectPage from './Component/pages/ProjectPage.jsx'
import SkillsPage from './Component/pages/SkillsPage.jsx'
import ContactPage from './Component/pages/ContactPage.jsx'
import FooterComponent from './Component/FooterComponent.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/pereedi",
    element:<App/> ,
  },

  {
    path: "/project",
    element:<ProjectPage/> ,
  },

  {
    path: "/skills",
    element:<SkillsPage/> ,
  },

  {
    path: "/contact",
    element:<ContactPage/> ,
  },

  {
    path: "/skills",
    element:<SkillsPage/> ,
  },

  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
