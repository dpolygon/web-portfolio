import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Navbar from './Components/Navbar';

import './index.css';
import Errorpage from './Routes/errorpage';
import Home from './Routes/home';
import Projects from './Routes/projects';

const Applayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
};

const router = createBrowserRouter([
  {
    element: <Applayout/>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
)
