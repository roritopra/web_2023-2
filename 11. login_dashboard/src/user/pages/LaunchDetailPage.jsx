import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function LaunchDetailPage() {
  const { flight_number } = useParams();
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
      .then((response) => response.json())
      .then((data) => setLaunchData(data));
  }, [flight_number]);

  return (
    <div>
      {launchData === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{launchData.mission_name}</h1>
          <p>{launchData.details}</p>
          <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${launchData.links.youtube_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      )}
    </div>
  );
}