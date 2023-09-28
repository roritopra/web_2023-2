import useFetchJokes from '../hooks/useFetchJokes';

function RenderJokes() {
    const { data: jokes, loadingJokes } = useFetchJokes('https://catfact.ninja/fact');

    return (
        <>
        {loadingJokes ? (
        <p>Cargando...</p>
    ) : (
        <div className="jokes-list">
            <div key={jokes} className="jokes">
            <h2>{jokes.fact}</h2>
            <p>{jokes.lenght}</p>
            </div>
        </div>
    )}
    </>
    )
}

export { RenderJokes }