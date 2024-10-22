'use client'
import { Button, toast } from '../../../../src'

const DefaultToast = () => {
  return <Button onClick={() => toast('Keep React is Awesome')}>Toast</Button>
}

const ToastWrapperCode = {
  'main.tsx': `
import { ToastWrapper } from 'keep-react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
      <ToastWrapper
        richColors={true}
        toastOptions={{
        classNames: {
          title: 'text-body-3 font-medium',
          toast: 'rounded-xl shadow-large',
          description: 'text-body-4 font-normal',
        },
      }}
    />
  </React.StrictMode>,
)
`,
}

const DefaultToastCode = {
  'ToastComponent.tsx': `
'use client'
import { Button, toast } from 'keep-react'

export const ToastComponent = () => {
  return (
    <Button onClick={() => toast('Keep React is Awesome')}>
      Toast
    </Button>
  )
}
`,
}

export { DefaultToast, DefaultToastCode, ToastWrapperCode }
