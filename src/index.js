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
import ProfilePage from './components/ProfilePage';
import Tournaments from './components/TournamentsPage';
import Community from './components/CommunityPage';
import Organise from "./components/Organise"
import ProtectedRoute from './components/ProtectedRoute';



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
    element: <ProtectedRoute><ProfilePage /></ProtectedRoute> 
  },
  {
    path: "/community",
    element: <Community />
  },
  {
    path: "/tournaments",
    element: <Tournaments />
  },
  {
    path: "/tournaments/organise",
    element: <Organise />

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


