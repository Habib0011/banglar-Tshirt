import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';

const router = createBrowserRouter([
 {
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('tshirts.json')
    },
    {
      path:'about',
      element:<About></About>
    },
    {
      path:'review',
      element:<OrderReview></OrderReview>
    }
  ]
 }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
