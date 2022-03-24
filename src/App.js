import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Cartao from './components/Cartao';


function App() {
  return (
    <div>

      <Menu/>  
      <Cartao content="São Francisco, oficialmente Cidade e Condado de São Francisco (em inglês: City and County of San Francisco), é a quarta cidade mais populosa do estado da Califórnia e a 17ª mais populosa dos Estados Unidos, com uma população de mais de 873 mil habitantes, segundo o censo nacional de 2020." nome="San Francisco" foto="https://media.istockphoto.com/photos/birmingham-uk-from-above-picture-id1304547599?b=1&k=20&m=1304547599&s=170667a&w=0&h=BwJAyl4D8iCbVrEh_NqGpbA8MkOBoQ7DYyvSDN4pvf4="/>
      <Cartao content="" nome="Teste2" foto="https://media.istockphoto.com/photos/top-view-of-central-district-in-hong-kong-china-at-night-picture-id1289488199?b=1&k=20&m=1289488199&s=170667a&w=0&h=Hd3Xbu_pBcibwIuudraUtpWhKGVQVE5EEGsaQOXNFgo="/>
      <Cartao content="Tokyo historically Tokio and officially the Tokyo Metropolis (東京都, Tōkyō-to), is the capital and largest city of Japan. Its metropolitan area is the most populous in the world, with an estimated 37.468 million residents in 2018." nome="Tokyo" foto="https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHQlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/>    
      <h1>H1</h1>
      <Button variant="primary">Primary</Button>{' '}
    

    </div>
  );
}

export default App;
