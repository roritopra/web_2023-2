import { RenderFacts } from './components/RenderFacts';
import { RenderCats } from './components/RenderCats';
import './index.css';

function App() {

  return (
    <main className='grid place-content-center min-h-screen max-h-screen bg-[#111827]'>
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border border-gray-700">
        <div className="relative mx-4 max-h-80 -mt-6 h-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <RenderCats />
        </div>
        <div className="p-6">
          <RenderFacts />
        </div>
        <div className="p-6 pt-0">
          <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
