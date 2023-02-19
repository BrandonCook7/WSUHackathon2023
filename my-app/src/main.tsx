import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LandingPage from  "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import LanguagesPage from './pages/LanguagesPage';
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from './supabaseClient';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LanguagePage from './pages/LanguagePage';
import LanguageCategoryPage from './pages/LanguageCategoryPage';
// http://localhost:5173/languages/{language : string}/{category : number}/

// const userData = await supabase.auth.getSession()

// landing page should become a navbar layout type of thing
const router = createBrowserRouter([
  {
    path: "/",
    element: <SessionContextProvider supabaseClient={supabase}><LandingPage /></SessionContextProvider>,
    children: [
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
      }
    ]
  }  
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SessionContextProvider supabaseClient={supabase}><LandingPage /></SessionContextProvider>,
//   },
//   {
//     path: "/languages",
//     element: <SessionContextProvider supabaseClient={supabase}></SessionContextProvider><LanguagesPage />,
//   },
//   {
//     path: "/languages/:language",
//     element: <SessionContextProvider supabaseClient={supabase}></SessionContextProvider><LanguagePage />,
//   },
//   {
//     path: "/languages/:language/:category",
//     element: <SessionContextProvider supabaseClient={supabase}></SessionContextProvider><LanguageCategoryPage />,
//   },
//   {
//     path: "login",
//     element:  <SessionContextProvider supabaseClient={supabase}></SessionContextProvider><LoginPage />
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={null} />
  </React.StrictMode>,
)
