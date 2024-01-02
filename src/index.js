import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

const rootElement = document.getElementById('root');

// @ts-ignore
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
