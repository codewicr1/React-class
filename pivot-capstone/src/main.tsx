import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./navigation";
//import App from './DiceGame/App.tsx';
//import App from './ContactSearch/App';
// import App from './CatApp/App.tsx';
// import App from './YoutubeVideo/App';
//import App from"./SocialApp/App";

import App from './SocialApp/App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Navigation />
   </BrowserRouter>
  </StrictMode>,
)