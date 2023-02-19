import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LandingPage from  "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import LanguagesPage from './pages/LanguagesPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LanguagePage from './pages/LanguagePage';
import LanguageCategoryPage from './pages/LanguageCategoryPage';
import ProfilePage from './ProfilePage';
// http://localhost:5173/languages/{language : string}/{category : number}/

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/languages",
    element: <LanguagesPage />,
  },
  {
    path: "/languages/:language",
    element: <LanguagePage />,
  },
  {
    path: "/languages/:language/:category",
    element: <LanguageCategoryPage />,
  },
  {
    path: "login",
    element:  <LoginPage />
  },
  {
    path: "profile",
    element:  <ProfilePage />
  }
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={null} />
  </React.StrictMode>,
)
