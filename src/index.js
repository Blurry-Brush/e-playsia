import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register';
import { AuthContextProvider } from './context/AuthContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login/:imgUrl",
    element: <Register />
  },
  {
    path: "/profile",
    element: <App />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>

    <RouterProvider router={router} />
  </AuthContextProvider>
  </React.StrictMode>
);


