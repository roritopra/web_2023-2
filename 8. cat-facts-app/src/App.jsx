import { RenderJokes } from './components/RenderJokes';
import { RenderCats } from './components/RenderCats';
import './index.css';

function App() {

  return (
    <div className="text-red text-2xl">
      <h1>Cargando apis de gatos y chistes malisimos</h1>
      <RenderCats />
      <RenderJokes />
    </div>
  );
}

export default App;
