import React from 'react'

import { useState,useEffect } from 'react'
import instance from '../instance'
import requests from '../request'
import './Banner.css'

function Banner() {

    const [movies,setMovies] = useState([])
    async function fetchMovies(){
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovies(request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ]);
    }
    console.log(movies);
    
    useEffect(()=>{
        fetchMovies()
    },[])
     
    function truncate(str,n){
     return   str?.length>n ?str?.substr(0,n-1)+"...":str
        
    }








  return (
    <div className='banner'
    style={{
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
       
    }}
    >
        <div className='Banner-contents'>
               <h1 className='Banner-title'>
                {movies?.name}

               </h1>
               <h1 className='Banner-desc'>{truncate(movies?.overview,150)}</h1>
        </div>
    </div>
  )
}

export default Banner