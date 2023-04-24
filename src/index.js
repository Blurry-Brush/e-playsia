import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register';
import ProfilePage from './components/ProfilePage';
import Tournaments from './components/TournamentsPage';
import Community from './components/CommunityPage';



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
    element: <ProfilePage />
  },
  {
    path: "/community",
    element: <Community />
  },
  {
    path: "/tournaments",
    element: <Tournaments />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


