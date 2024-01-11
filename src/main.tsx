import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './style/GlobalStyle.ts'
import { ThemeProvider } from 'styled-components'
import {Theme} from './style/theme.ts'
import { ContextProvider } from './hooks/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ContextProvider>
        <App />
        
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
