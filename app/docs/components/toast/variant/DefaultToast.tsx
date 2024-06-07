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
      <ToastWrapper
        toastOptions={{
          classNames: {
            toast: 'dark:bg-metal-900 border dark:border-metal-800 border-white bg-white',
            title: 'text-metal-900 dark:text-white',
            description: 'dark:text-metal-300 text-metal-600',
            actionButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            cancelButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            closeButton: 'dark:bg-metal-800 bg-metal-900 text-white',
            error: 'text-error-500',
            success: 'text-success-500',
            warning: 'text-warning-500',
            info: 'text-primary-500',
          },
        }}
      />
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
