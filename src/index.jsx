import React from 'react';
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import App from './Routes';

//Intégration avec le index.html du dossier public
createRoot(document.getElementById('root')).render(<App />)
