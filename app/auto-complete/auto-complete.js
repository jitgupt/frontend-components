"use client"

import React, { useEffect, useState } from 'react'

export const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState();

  useEffect(() => {
    // Debouncing the API call
    // User types "h" → Timer starts (300ms)
    // User types "e" (at 50ms) → Previous timer cancelled, new timer starts, because query change cause re-render of component, 
    //  and timer is cancelled in cleanup function for previous component
    // User types "l" (at 100ms) → Previous timer cancelled, new timer starts
    // User stops typing → Timer completes → API call fires with "hel"

    const delayDebounceFn = setTimeout(() => {
      if (query.length > 0) {
        fetchData();
      } else {
        setSuggestions([]);
      }
    }, 300)

    return () => {
      console.log("CLEANUP");
      clearTimeout(delayDebounceFn)
    }
  }, [query]);

  const fetchData = async () => {
    if(cache && cache[query]) {
      setSuggestions(cache[query]);
      return;
    }

    const response = await fetch(`https://www.google.com/complete/search?client=firefox&q=${query}`)
    const data = await response.json()
    cache ? setCache({...cache, [query]: data[1]}) : setCache({[query]: data[1]});
    setSuggestions(data[1]);
  }

  const handleChange = (e) => {
    const query = e.target.value
    console.log("query: ", query);
    setQuery(query);
  }

  return (
    <div className='flex flex-col m-20' >
      <input 
        className="w-[400px] p-2 border border-gray-300 rounded-md" 
        type='text'
        placeholder='Search...' 
        value={query} 
        onChange={handleChange} 
        onFocus={() => setIsResultVisible(true)} 
        onBlur={() => setIsResultVisible(false)} 
      />
      {suggestions.length > 0 && isResultVisible && <ul className='flex flex-col w-[400px] border border-gray-300 p-2'>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>}
    </div>
  )
}
