import { useState, useEffect } from 'react';

const useFetchJokes = (url) => {
  const [data, setData] = useState([]);
  const [loadingJokes, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loadingJokes };
};

export default useFetchJokes;
