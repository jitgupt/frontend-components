"use client"

import React, { useEffect, useState } from 'react'
import { MemeCard } from './meme-card';
import { Shimmer } from './shimmer';

const page = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    console.log('Infinite Scroll Page Loaded')
    fetchMemes();

    window.addEventListener('scroll', () => {
      hanleScroll();
    });

    return () => {
      window.removeEventListener('scroll', hanleScroll);
    }
  }, [])

  const hanleScroll = () => {
    console.log("Scroll");
    
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
    console.log("true");

      fetchMemes();
    }
  }

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch('https://meme-api.com/gimme/20');
    const json = await data.json();
    setMemes((prevMemes) => [...prevMemes, ...json.memes]);
    setShowShimmer(false);
  }

  return (
    <div className="flex flex-wrap justify-center">
      {memes.map((meme, index) => <MemeCard key={index} data={meme} />)}
      {showShimmer && <Shimmer />}
    </div>
  )
}

export default page
