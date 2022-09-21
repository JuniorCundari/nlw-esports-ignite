import { BrowserRouter } from 'react-router-dom'

import MainRoutes from './MainRoutes'

import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App
