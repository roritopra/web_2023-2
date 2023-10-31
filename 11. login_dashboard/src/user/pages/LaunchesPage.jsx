import { Navbar } from "../components/Navbar";
import data from "../data/launches.json";
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

  return (
    <>
      <Navbar />
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

        <section
          id="cards"
          className="grid mx-2 gap-3 mt-32 sm:grid-cols-2 lg:grid-cols-3 lg:mx-14"
        >
          {data.map((launch, index) => (
            <article
              key={index}
              className="card relative flex flex-col w-full bg-card-ligh cursor-pointer rounded-lg py-4"
            >
              <div className="card-content"></div>
              <div className="relative z-30 flex justify-center items-center">
                <img
                  className="overflow-hidden w-full lg:w-[80%] mb-11 px-14"
                  src={launch.links.mission_patch}
                  alt="Launch patch image"
                />
              </div>
              <div className="relative z-30 flex px-4">
                <span
                  className={`${
                    launch.launch_success
                      ? "font-roobertSemiBold text-green-900 text-xs px-3 py-[1px] mb-3 bg-green-400 rounded-md lg:text-sm"
                      : "font-roobertSemiBold text-red-900 text-xs px-3 py-[1px] mb-3 bg-red-400 rounded-md lg:text-sm"
                  }`}
                >
                  {launch.launch_success ? "Success" : "Failure"}
                </span>
              </div>
              <h6 className="relative z-30 font-roobert text-white px-4 text-xl mb-4">
                Flight #{launch.flight_number}
              </h6>
              <p className="relative z-30 px-4 text-[#A8A8A8] font-roobertLight  text-sm">
                {(launch.details != null) & (launch.details?.length > 100)
                  ? launch.details.slice(0, 100) + "..."
                  : launch.details}
              </p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
