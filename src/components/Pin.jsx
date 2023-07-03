import React, { useState } from 'react'
import { urlFor } from '../lib/client'
import { useNavigate } from 'react-router-dom'

const Pin = ( {pin: { postedBy, image, _id, destination }}) => {
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);

  const navigate = useNavigate();
  return (
    <div className='m-2'>
      <div 
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/pin-detail/${_id}`)}
        className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
      >
        <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()} />
      </div>
    </div>
  )
}

export default Pin