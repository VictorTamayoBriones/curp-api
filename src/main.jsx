import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
