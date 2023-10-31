import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { fetchData } from "../../services/apiService";
import "./launches.css";

export function LaunchesPage() {
  /*document.getElementById("cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };*/

  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const launchesPerPage = 9;

  const indexOfLastFight = (currentPage + 1) * launchesPerPage;
  const indexOfFirstFight = indexOfLastFight - launchesPerPage;
  const currentLaunches = launches.slice(indexOfFirstFight, indexOfLastFight);

  function handlePageClick(data) {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  }

  useEffect(() => {
    fetchData()
      .then((data) => {
        setLaunches(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="bg-black">
        <header className="h-screen overflow-hidden relative z-20">
          <div className="relative h-full w-full">
            <img
              src="bg-launches.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
              <div className="w-3/4 text-center md:w-2/4">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="800"
                  className="mb-4 text-3xl md:text-4xl lg:text-7xl text-white font-roobert font-bold"
                >
                  LAUNCHES
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3 mt-32">
          <div className="flex flex-col items-center gap-1">
            <h6 className="text-9xl font-roobert text-white">273</h6>
            <p className="text-white text-base">TOTAL LAUNCHES</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h6 className="text-9xl font-roobert text-white">236</h6>
            <p className="text-white text-base">TOTAL LANDINGS</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h6 className="text-9xl font-roobert text-white">208</h6>
            <p className="text-white text-base">TOTAL REFLIGHTS</p>
          </div>
        </section>

        <aside className="flex justify-center gap-3 items-center mt-32 mb-24 lg:mx-14">
          <div className="px-14 lg:px-7 w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Falcon 9, Falcon Heavy, Starship"
              className="rounded-xl py-3 text-[#e9e9e9] bg-[#434343] w-full placeholder:font-roobertLight placeholder:text-[#8a8a8a]"
            />
          </div>
          <button className="py-3 px-9 rounded-lg bg-[#434343] text-white font-roobertLight text-base hover:bg-[#5e5e5e]">
            Search
          </button>
        </aside>

        <ReactPaginate
          previousLabel={
            <div className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-white bg-[#434343] border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </div>
          }
          nextLabel={
            <div className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#434343] border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          }
          breakLabel={
            <div className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-[#434343] border border-[gray-300] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              ...
            </div>
          }
          pageCount={Math.ceil(launches.length / launchesPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"flex items-center -space-x-px h-8 text-sm"}
          pageClassName={""}
          pageLinkClassName={
            "flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#434343] border border-[#8a8a8a]hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          breakClassName={""}
          previousClassName={""}
          nextClassName={""}
          previousLinkClassName={""}
          nextLinkClassName={""}
          activeClassName={
            "z-50 flex items-center justify-center h-8 leading-tight text-blue-600 border border-[#8a8a8a] bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-[#8a8a8a] dark:bg-gray-700 dark:text-white"
          }
        />

        <section
          id="cards"
          className="grid mx-2 gap-3 mt-32 sm:grid-cols-2 lg:grid-cols-3 lg:mx-14"
        >
          {currentLaunches.map((launches, index) => (
            <article
              key={index}
              className="card relative flex flex-col w-full bg-card-ligh cursor-pointer rounded-lg py-4"
            >
              <div className="card-content"></div>
              <div className="relative z-30 flex justify-center items-center">
                <img
                  className="overflow-hidden w-full lg:w-[80%] mb-11 px-14"
                  src={launches.links.mission_patch}
                  alt="Launch patch image"
                />
              </div>
              <div className="relative z-30 flex px-4">
                <span
                  className={`${
                    launches.launch_success
                      ? "font-roobertSemiBold text-green-900 text-xs px-3 py-[1px] mb-3 bg-green-400 rounded-md lg:text-sm"
                      : "font-roobertSemiBold text-red-900 text-xs px-3 py-[1px] mb-3 bg-red-400 rounded-md lg:text-sm"
                  }`}
                >
                  {launches.launch_success ? "Success" : "Failure"}
                </span>
              </div>
              <h6 className="relative z-30 font-roobert text-white px-4 text-xl mb-4">
                Flight #{launches.flight_number}
              </h6>
              <p className="relative z-30 px-4 text-[#A8A8A8] font-roobertLight  text-sm">
                {(launches.details != null) & (launches.details?.length > 100)
                  ? launches.details.slice(0, 100) + "..."
                  : launches.details}
              </p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
