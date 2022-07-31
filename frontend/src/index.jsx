import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Wallet, Theme, Reach } from './contexts';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HashRouter>
    <Reach>
      <Wallet>
        <Theme>
          <App />
        </Theme>
      </Wallet>
    </Reach>
  </HashRouter>,
);
