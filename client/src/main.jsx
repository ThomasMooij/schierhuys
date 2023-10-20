import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from "./context/AuthContext";
import { ReserveContextProvider } from './context/ReserveContext';


ReactDOM.createRoot(document.getElementById('root')).render(
        <AuthContextProvider>
        <ReserveContextProvider>
                <App />
        </ReserveContextProvider>
        </AuthContextProvider>
)
