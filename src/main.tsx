import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Context from './components/Context.tsx'

createRoot(document.getElementById('root')!).render(
    <Context>
      <App />
    </Context>,
)
