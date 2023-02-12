import './index.scss'

import ReactDOM from 'react-dom/client'

import App from './App'

const frontEndApp = <App />

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root') as HTMLElement

  if (root) {
    ReactDOM.createRoot(root).render(frontEndApp)
  }
})
