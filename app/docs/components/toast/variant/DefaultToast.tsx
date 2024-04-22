'use client'
import { Button, toast } from '../../../../src'

const DefaultToast = () => {
  return (
    <Button size="sm" color="secondary" className="bg-metal-900" onClick={() => toast('Keep React is Awesome')}>
      Toast
    </Button>
  )
}

const ToastWrapperCode = `
import { ToastWrapper } from 'keep-react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastWrapper />
  </React.StrictMode>,
)
`

const DefaultToastCode = `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  return (
    <Button size="sm" color="secondary" className="bg-metal-900" onClick={() => toast('Keep React is Awesome')}>
      Toast
    </Button>
  )
}
`

export { DefaultToast, DefaultToastCode, ToastWrapperCode }
