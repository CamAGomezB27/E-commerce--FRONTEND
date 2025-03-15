import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppRoutes from './routes.tsx'
import "./styles/global.css" //ESTILOS GLOBALES

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AppRoutes />
  </StrictMode>,
)
