import useFetchImageCats from "./hooks/useFetchImageCats";
import { RenderFacts } from './components/RenderFacts';
import { RenderCats } from './components/RenderCats';
import './index.css';
import { useCallback } from 'react';

function App() {
  const { catImage, isLoadingCats, wordsFacts, setReloadKey } = useFetchImageCats();

  const handleApiReload = useCallback(
    () => {
      setReloadKey(prevKey => !prevKey);
    },
    [setReloadKey],
  )
  

  return (
    <main className='grid place-content-center min-h-screen max-h-screen'>
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border border-gray-700">
        <div className="relative mx-4 max-h-80 -mt-6 h-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <RenderCats  catsImage={catImage} isLoadingCats={isLoadingCats}/> 
        </div>
        <div className="p-6">
          <RenderFacts  catsFacts={wordsFacts} isLoadingFacts={isLoadingCats}/>
        </div>
        <div className="p-6 pt-0">
          <button onClick={handleApiReload} data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] disabled:opacity-50 disabled:shadow-none">
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
