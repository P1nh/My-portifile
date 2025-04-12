
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.tsx'
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.ts';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />

    </ThemeProvider>
  </React.StrictMode>,
)
