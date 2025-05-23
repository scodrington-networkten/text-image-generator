import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

const el = document.getElementById('root');
const root = createRoot(el);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
