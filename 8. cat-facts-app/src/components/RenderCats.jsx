import useFetchCats from "../hooks/useFetchCats";

function RenderCats() {
    const { data: cats, loadingCats } = useFetchCats('https://cataas.com/cat');

  return (
    <>
        {loadingCats ? (
        <p>Cargando...</p>
      ) : (
        <div className="cast-list">
            <div key={cats} className="cats">
              <img src={cats} alt="" />
            </div>
        </div>
      )}
    </>
  )
}

export { RenderCats }