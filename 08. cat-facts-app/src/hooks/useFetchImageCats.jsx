import { useState, useEffect } from 'react';

const useFetchImageCats = () => {
  const [catImage, setCatImage] = useState({
    url: ''
  });
  const [wordsFacts, setWordsFacts] = useState('');
  const [isLoadingCats, setLoading] = useState(false);
  const [reloadKey, setReloadKey] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(isLoadingCats) return;

        setLoading(true);
        const factRes = await fetch('https://catfact.ninja/fact');
        const {fact} = await factRes.json();

        const firstourWords = fact.split(' ');
        const firstFourWords = firstourWords.slice(0, 4);
        
        const response = await fetch(`https://cataas.com/cat/says/${firstFourWords.join(' ')}?json=true`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json(); 
        setCatImage(result);
        setWordsFacts(fact);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [reloadKey]); 

  return { catImage, isLoadingCats, wordsFacts, setReloadKey };
};

export default useFetchImageCats;
