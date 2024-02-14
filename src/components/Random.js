import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const API_KEY = process.env.REACT_LOCAL_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add state for loading

  async function fetchData() {
    try {
      setIsLoading(true); // Set loading to true before fetching data
      const url = `https://api.giphy.com/v1/gifs/random?api_key=gau4P3Hkpljt8hkuMSXaaz4NcdVRz8lU&tag=&rating=g`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error(error); // Handle errors if fetching fails
    } finally {
      setIsLoading(false); // Set loading to false after fetching data
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-red-900 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[10px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>

      {isLoading ? (
        // Display loader while data is fetching
        <div className="flex justify-center items-center h-48">
          <div className="spinner-border animate-spin inline-block mx-auto w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <img src={gif} 
        max-width="450" max-height="300" 
        min-width="450" min-height="300"
        alt="RANDOM GIF" />
      )}

      <button
        onClick={clickHandler}
        className="w-10/12 bg-indigo-300 text-lg py-2 rounded-lg mb-[20px] hover:bg-zinc-300"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
