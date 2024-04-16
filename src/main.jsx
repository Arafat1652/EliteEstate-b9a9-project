import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
import PrivateRoute from './Pages/PrivateRoute';
import UpdateProfile from './Pages/UpdateProfile';
import ErrorPage from './Pages/ErrorPage';
import AboutUs from './Pages/AboutUs';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/update',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      }
    ]
  },
  {
    path: '/detail/:id',
    element: <PrivateRoute><DetailEstate></DetailEstate></PrivateRoute>,
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
  <HelmetProvider>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   </HelmetProvider>
   <ToastContainer position="top-center" autoClose={2000}/>
  </React.StrictMode>,
)
