'use client'

import React, { useState } from 'react'

export const Accordion = ({data}) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className='w-[50%] m-auto mt-5'>
      {data.map((item, index) => (
        <AccordionItem 
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex ? true : false} 
          setIsOpen = {
            () => setOpenIndex(index === openIndex ? -1 : index)
          }/>
      ))}
    </div>
  )
}

const AccordionItem = ({title, content, isOpen, setIsOpen}) => {
  return (
    <div className='flex flex-col border border-white '>
      <div className='font-bold text-black p-2 bg-slate-200 flex justify-between cursor-pointer' onClick={() => setIsOpen()}>
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className='p-2'>{content}</div>}
    </div>
  )
}