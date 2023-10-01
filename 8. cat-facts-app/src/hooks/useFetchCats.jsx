import { useState, useEffect } from 'react';

const useFetchCats = (url) => {
  const [data, setData] = useState([]);
  const [isLoadingCats, setLoading] = useState(true);

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

  useEffect(() => {
    fetchData();
  }, [url]);

  const reload = () => {
    setLoading(true);
    fetchData();
  };

  return { data, isLoadingCats, reload };
};

export default useFetchCats;
