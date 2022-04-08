import GlobalStyles from '../src/theme/globalStyles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './hooks/theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
