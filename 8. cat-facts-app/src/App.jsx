import { RenderFacts } from './components/RenderFacts';
import { RenderCats } from './components/RenderCats';
import './index.css';

function App() {

  return (
    <div>
      <h1 className="text-2xl text-red-600">Cargando apis de gatos y datos raros ._.</h1>
      <RenderCats />
      <RenderFacts />
    </div>
  );
}

export default App;
