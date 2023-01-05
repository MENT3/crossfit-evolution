import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '~/app'
import AppProviders from '~/contexts/app-providers'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
)
