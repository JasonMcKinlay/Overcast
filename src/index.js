import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App.jsx";

// Deployment timestamp: Mon Nov 4 2024
const root = createRoot(document.getElementById('root'));
root.render(<App />);