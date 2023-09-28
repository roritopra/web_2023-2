import './App.css';
import useFetchJokes from './hooks/useFetchJokes';
import useFetchCats from './hooks/useFetchCats';

function App() {
  const { data: jokes, loadingJokes } = useFetchJokes('https://catfact.ninja/fact');
  const { data: cats, loadingCats } = useFetchCats('https://cataas.com/cat');

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>Cargando apis de gatos y chistes malisimos</h1>
      {loadingCats ? (
        <p>Cargando...</p>
      ) : (
        <div className="cast-list">
            <div key={cats} className="cats">
              <img src={cats} alt="" />
            </div>
        </div>
      )}
      {loadingJokes ? (
        <p>Cargando...</p>
      ) : (
        <div className="jokes-list">
            <div key={jokes} className="jokes">
              <h2>{jokes.fact}</h2>
              <p>{jokes.lenght}</p>
              <button onClick={reloadPage}>Reiniciame ve</button>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
