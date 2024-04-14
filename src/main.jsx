import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import Root from './Root/Root';
import Login from './ForUser/Login';
import Register from './ForUser/Register';
import AuthProvider from './ForUser/AuthProvider/AuthProvider';
import DetailEstate from './Pages/DetailEstate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
    ]
  },
  {
    path: '/detail/:id',
    element: <DetailEstate></DetailEstate>,
    loader: ()=>fetch('/estate.json')
  },
  {
    path: '/login',
    element:<Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
