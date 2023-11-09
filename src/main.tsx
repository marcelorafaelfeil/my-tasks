import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { Layout } from './components/Layout';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Layout>
        <App />
      </Layout>
    </NextUIProvider>
  </React.StrictMode>,
);
