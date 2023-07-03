import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin';


const MasonryLayout = ({ pins }) => {
  console.log('***Pins %o', pins)
  const breakpointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1
  }

  return (
    <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj}>
        {pins?.map((pin) => <Pin key={pin._id} pin={pin} className='w-max' />)}
{console.log('===pin.destination=%o', pins[0].destination)}
      {/* <div>MasonryLayout0</div> */}
    </Masonry>
    // <div>Masonry Layout</div>
    // <div>MasonryLayout test</div>
  )
}

export default MasonryLayout