/* @refresh reload */
import 'virtual:windi.css';
import { render } from 'solid-js/web';
import { hashIntegration, Router } from 'solid-app-router';

import App from './App';

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
