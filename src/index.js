import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Portal from './pages/portal';
import NationalPortal from './pages/nationalportal';
import ResearchPapers from './pages/researchpaper';
import Learn from './pages/learnmore.js';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"portals",
    element: <Portal/>,
  },
  {
    path:"National Portals",
    element: <NationalPortal/>,
  },
  
  {
    path:"LearnM",
    element: <Learn/>,
  },
  {
    path:"Research Papers",
    element: <ResearchPapers/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

