import { useState, useEffect } from 'react';
import useFetchFacts from './useFetchFacts';

const useFetchImageCats = () => {
  const [data, setData] = useState([]);
  const [isLoadingCats, setLoading] = useState(true);
  
  const { data: catsFacts } = useFetchFacts();

  const wordsFacts = catsFacts.fact;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(catsFacts.fact);
        setTimeout(async () => {
          const response = await fetch(`https://cataas.com/cat/says/${wordsFacts}?json=true`);
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
  }, [catsFacts]); 

  return { data, isLoadingCats };
};

export default useFetchImageCats;
