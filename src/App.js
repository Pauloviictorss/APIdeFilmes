import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Cartao from './components/Cartao';
import Pagina1 from './pages/Pagina1';
import Carros from './pages/Carros';
import Objeto from './pages/Objeto';
import Array from './pages/Array';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Menu/>  
        <Routes>
          <Route path="/" element={<Carros/>} />
          <Route path="/carros" element={<Carros/>} />
          <Route path="/array" element={<Array/>} />
          <Route path="/objeto" element={<Objeto/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
