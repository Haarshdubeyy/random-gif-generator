import React, { useEffect, useState } from 'react'
import axios from 'axios'


// const API_KEY = process.env.REACT_LOCAL_API_KEY;

const Random = () => {

   const [gif, setGif] = useState('');



     async function fetchData() {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=gau4P3Hkpljt8hkuMSXaaz4NcdVRz8lU&tag=&rating=g`;
      const {data} = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url
       
      setGif(imageSource);
        
     }
      

     useEffect(()=>{
          fetchData();
     },[])
   function clickHandler(){
       fetchData();
   }

  return (
    <div className='w-1/2 bg-red-800 rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px]text-2xl underline uppercase font-bold'>A Random Gif</h1> 

      
      <img src = {gif} width="450" alt='RANDOM GIF'/>
        
      <button onClick={clickHandler}

      className='w-10/12 bg-indigo-300 text-lg py-2 rounded-lg mb-[20px] hover:bg-zinc-300'>

        Generate

      </button>
    </div>
  )
}

export default Random
