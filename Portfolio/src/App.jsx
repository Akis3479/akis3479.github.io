import { useState, useEffect } from 'react';
import { Menu } from './Components/Menu/Menu';
import { Loading } from './Components/Loading/Loading';
import bgImg from './Components/Menu/assets/bg.webp';
import profileImg from './Components/Card/assets/image.webp';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToLoad = [bgImg, profileImg];
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === imagesToLoad.length) {
        setIsLoading(false);
      }
    };

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Fallback to not block forever
      img.src = src;
    });
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <Menu />}
    </>
  );
}

export default App;
