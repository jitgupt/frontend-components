'use client'

import React, { useEffect, useRef, useState } from 'react'

const CHAT_MESSAGES_LIMIT = 100;

let nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export const ChatWindow = () =>{
  const [messages, setMessages] = useState([]);
  const chatRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function generateRandomNames() {
    let finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
  }

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=1');
    const data = await response.json();

    const formattedData = data.map(item => ({
      name: generateRandomNames(),
      photo: `https://i.pravatar.cc/150?img=${item.id}`,
      message: item.body
    }));
    
    setMessages(messages => {
      let newMessages = [...formattedData, ...messages];
      newMessages = newMessages.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessages;
    });

    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }

  return (
    <div className='flex w-full h-[600px] border border-white m-5 p-2 overflow-y-scroll flex-col-reverse' >
      {messages.map((message, index) => (
        <ChatMessage key={index} {...message} />
      ))}
    </div>
  )
}


const ChatMessage = ({name, photo, message}) => {
  return (
    <div className="flex items-center mb-2 text-white gap-5">
      <div className='flex items-center'>
        <img src={photo} alt={name} className="w-8 h-8 rounded-full mr-2" />
        <span className="font-semibold">{name}</span>
      </div>
      <p>{message.substring(0,30)}</p>
    </div>
  )
}