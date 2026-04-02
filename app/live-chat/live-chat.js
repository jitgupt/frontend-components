import React from 'react'
import { VideoStream } from './video-stream'
import { ChatWindow } from './chat-window'

export const LiveChat = () => {
  return (
    <div className='flex'>
      <VideoStream />
      <ChatWindow />
    </div>
  )
}
