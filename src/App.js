import './App.css';
import RoutesAplication from './routes';
import { PokedexProvider } from '../src/context';

function App() {
  return (
    <PokedexProvider>
      <RoutesAplication />
    </PokedexProvider>
  )

}

export default App;
