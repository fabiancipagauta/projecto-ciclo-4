import React from 'react';
import './App.css';
import { AuthoProvider } from './auth/authContext';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <AuthoProvider>
        <AppRouter />
      </AuthoProvider>
    </div>
  );
}
export default App;
