import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wallet, Theme, Reach } from './contexts';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Reach>
      <Wallet>
        <Theme>
          <App />
        </Theme>
      </Wallet>
    </Reach>
  </Router>,
);
