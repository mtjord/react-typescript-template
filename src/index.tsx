import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyles';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Root container could not be found.');
}

createRoot(container).render(
    <>
        <GlobalStyle />
        <App />
    </>
);
