import { Post } from '@prisma/client';
import React from 'react'
import Card from '../(shared)/Card'

type Props = {
    travelPosts : Array<Post>;
}

function Travel({travelPosts}: Props) {
    return (
        <section className='mt-10'>
            <hr className='border-1' />
    
            <div className='flex items-center gap-3 my-8'>
                <h4 className='font-bold text-xl bg-accent-orange py-2 px-5 text-wh-900'>
                    TRAVEL
                </h4>
                <p className='text-2xl font-bold'>Destinations for the new Millenniums</p>
            </div>

            {/* Card Rows */}

            <div className='sm:flex gap-8 justify-between'>
                <Card className='basis-1/3  sm:mt-0' imageHeight='h-48' post={travelPosts[0]}  isLongForm isSmallCard/>
                <Card className='basis-1/3  sm:mt-0' imageHeight='h-48' post={travelPosts[1]} isLongForm isSmallCard/>
                <Card className='basis-1/3  sm:mt-0' imageHeight='h-48' post={travelPosts[2]} isLongForm isSmallCard/>
            </div> 

            <Card className=' sm::flex justify-between mt-3' imageHeight='h-80' post={travelPosts[3]} isLongForm isSmallCard/>
            </section>
  )
}

export default Travel
