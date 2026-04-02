import React from 'react'

export const Comments = ({ data }) => {
  return (
    <div className='flex flex-col gap-2'>
      {data.map((comment, index) => <CommentBox key={index} comment={comment} />)}
    </div>
  )
}

const CommentBox = ({ comment }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <div>
          <img alt="user" src="https://styles.redditmedia.com/t5_56z50y/styles/communityIcon_2i47qc0wi24f1.png?width=48&height=48&frame=1&auto=webp&crop=48%3A48%2Csmart&s=3c2f2af93d645c5569b8847d5f9dafd6ae4e959a" width="20" height={20}/>
        </div>
        <div className='flex flex-col gap-1'>
          <p>{comment.username}</p>
          <p>{comment.comment}</p>
        </div>
      </div>
      {comment.replies && (
        <div className='pl-10 border-l-2 border-white'>
            <Comments data={comment.replies} />
        </div>
      )}
    </div>
  )
}