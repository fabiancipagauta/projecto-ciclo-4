import { useEffect, useReducer } from 'react';
import './App.css';
import { AuthContext, AuthoProvider } from './auth/authContext';
import { authReducer } from './auth/authReducer';
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
