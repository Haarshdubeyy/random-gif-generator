import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Random = () => {
  const [gif, setGif] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      setIsLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=gau4P3Hkpljt8hkuMSXaaz4NcdVRz8lU&tag=&rating=g`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  function downloadGif() {
    const link = document.createElement('a');
    link.href = gif;
    link.download = 'random_gif.gif';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="w-96 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg p-8 text-white text-center">
      <h1 className="text-3xl font-extrabold mb-4">Explore a Random Gif</h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin w-8 h-8 border-t-4 border-white rounded-full"></div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={gif}
            className="rounded-lg shadow-lg my-4"
            style={{ maxWidth: '100%', height: 'auto' }}
            alt="Random Gif"
          />
          <button
            onClick={downloadGif}
            className="absolute bottom-2 right-2 bg-green-400 text-gray-800 text-sm px-2 py-1 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300"
          >
            Download
          </button>
        </div>
      )}

      <button
        onClick={clickHandler}
        className="w-full bg-yellow-400 text-gray-800 text-lg py-2 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:border-yellow-300"
      >
        Generate New Gif
      </button>
    </div>
  );
};

export default Random;
