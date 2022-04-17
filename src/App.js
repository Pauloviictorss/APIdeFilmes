import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Carros from './pages/Carros';
import Objeto from './pages/Objeto';
import Array from './pages/Array';
import Contador from './pages/Contador';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import FilmesLancamento from './pages/filmes/FilmesLancamento';
import FilmesCartaz from './pages/filmes/FilmesCartaz';
import AtoresDetalhes from './pages/atores/AtoresDetalhes';
import SeriesPopulares from './pages/series/SeriesPopulares';
import SeriesDetalhes from './pages/series/SeriesDetalhes';
import SeriesLancamento from './pages/series/SeriesLancamento';
import SeriesCartaz from './pages/series/SeriesCartaz';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Menu/>

        <Container>    
          <Routes>
            <Route path="/" element={<FilmesPopulares/>} />
            <Route path="/carros" element={<Carros/>} />
            <Route path="/array" element={<Array/>} />
            <Route path="/objeto" element={<Objeto/>} />
            <Route path="/contador" element={<Contador/>} />
            <Route path="/filmespopulares" element={<FilmesPopulares/>} />
            <Route path="/filmes/detalhes" element={<FilmesDetalhes/>}/>
            <Route path="/filmes/:id" element={<FilmesDetalhes/>}/>
            <Route path="/filmeslancamento" element={<FilmesLancamento/>}/>
            <Route path="/filmescartaz" element={<FilmesCartaz/>}/>
            <Route path="/atores/:id" element={<AtoresDetalhes/>}/>
            <Route path="/atores/detalhes" element={<AtoresDetalhes/>}/>
            <Route path="/seriespopulares" element={<SeriesPopulares/>} />
            <Route path="/series/detalhes" element={<SeriesDetalhes/>}/>
            <Route path="/series/:id" element={<SeriesDetalhes/>}/>
            <Route path="/serieslancamento" element={<SeriesLancamento/>}/>
            <Route path="/seriescartaz" element={<SeriesCartaz/>}/>
            <Route path="/atores/:id" element={<AtoresDetalhes/>}/>
          </Routes>
        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;
