import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider, } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

const query = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClient client={query}>
    <App />
    </QueryClient>
  </React.StrictMode>
);

