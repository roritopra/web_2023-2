import { useState, useEffect } from 'react';

const useFetchImageCats = () => {
  const [data, setData] = useState([]);
  const [isLoadingCats, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch('https://cataas.com/cat/says/bocachico?json=true');
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
  }, []);

  return { data, isLoadingCats };
};

export default useFetchImageCats;
