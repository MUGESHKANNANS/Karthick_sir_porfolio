import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import faviconUrl from './assets/image.png';
import ErrorBoundary from './components/ErrorBoundary';

const rootEl = document.getElementById('root');
if (!rootEl) {
  // eslint-disable-next-line no-console
  console.error('Root element not found');
}

createRoot(rootEl!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

// Ensure favicon loads via Vite-bundled URL
const ensureFavicon = () => {
  const link: HTMLLinkElement = document.querySelector("link[rel='icon']") || document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = faviconUrl;
  if (!link.parentNode) {
    document.head.appendChild(link);
  }
};

ensureFavicon();

// eslint-disable-next-line no-console
console.log('App bootstrapped');
