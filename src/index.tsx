import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'sanitize.css/sanitize.css';

import { App } from 'App';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ThemeProvider
      theme={{
        colors: {
          white: '#fff',
        },
      }}
    >
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </Provider>,
);
