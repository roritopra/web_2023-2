import Menu from "../components/Menu"
import './launches.css'

export function LaunchesPage() {
  document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }

  return (
    <>
    <Menu />
      <main className="bg-black">
        <header
          className="h-screen overflow-hidden relative z-20"
        >
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



<div id="cards" className="grid mx-14 gap-7 sm:grid-cols-2 lg:grid-cols-3 mt-32 ">
  <div className="card">
    <div className="card-content">
    </div>
  </div>
  <div className="card">
    <div className="card-content">
    </div>
  </div>
  <div className="card">
    <div className="card-content">
    </div>
  </div>
</div>

      </main>
    </>
  )
}

