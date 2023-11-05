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
          {/* ... display other data as needed */}
        </div>
      )}
    </div>
  );
}