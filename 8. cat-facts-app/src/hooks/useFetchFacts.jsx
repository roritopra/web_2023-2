import { useState, useEffect } from 'react';

const useFetchFacts = (url) => {
  const [data, setData] = useState([]);
  const [isLoadingFacts, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoadingFacts };
};

export default useFetchFacts;
