import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function LaunchDetailPage() {
  const { flight_number } = useParams();
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
      .then((response) => response.json())
      .then((data) => setLaunchData(data));
  }, [flight_number]);

  return (
    <main className="bg-black">
      {launchData === null ? (
        <div className="grid h-screen place-items-center bg-black">
            <p className="text-white text-lg font-roobertSemiBold">Loading...</p>
        </div>
      ) : (
        <section className="pt-36">
          <iframe
            className="mb-10 lg:px-20 lg:mb-20 w-full h-[365px] lg:h-[500px]"
            src={`https://www.youtube.com/embed/${launchData.links.youtube_id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="px-5 lg:px-20">
            <h6 className="text-[#8b939b] font-roobert lg:text-lg">
              {launchData.launch_year}
            </h6>
            <h1 className="text-white text-2xl font-roobertSemiBold lg:text-5xl">
              {launchData.mission_name}
            </h1>
            <h6 className="text-[#8b939b] font-roobert mb-10 lg:text-lg">
              {launchData.rocket.second_stage.payloads[0].nationality}
            </h6>
            <p className="text-white text-sm font-roobertLight mb-20 lg:mb-28 lg:text-lg">
              {launchData.details === null
                ? "No details for this launch, you can obtain more info in the wiki"
                : launchData.details}
            </p>
            <div className="flex justify-center items-center pb-10 lg:pb-20">
              <a
                className="text-white font-roobert bg-[#434343] w-full text-center py-3 rounded-lg hover:bg-[#8b939b] transition-colors duration-200 lg:w-1/5"
                target="_blank"
                href={launchData.links.wikipedia}
                rel="noreferrer"
              >
                Wikipedia
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
