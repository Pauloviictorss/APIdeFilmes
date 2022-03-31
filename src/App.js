import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Carros from './pages/Carros';
import Objeto from './pages/Objeto';
import Array from './pages/Array';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Menu/>

        <Container>    
          <Routes>
            <Route path="/" element={<Carros/>} />
            <Route path="/carros" element={<Carros/>} />
            <Route path="/array" element={<Array/>} />
            <Route path="/objeto" element={<Objeto/>} />
          </Routes>
        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;
