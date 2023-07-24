import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Game app" defaultTitle="Game app">
        <meta name="description" content="Game app" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
