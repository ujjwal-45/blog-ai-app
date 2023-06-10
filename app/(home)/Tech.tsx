import { Post } from '@prisma/client'
import React from 'react'
import Card from '../(shared)/Card'

type Props = {
  techPosts : Array<Post>;
}

const Tech = ( {techPosts}: Props) => {
  return (
    <section>
        <hr className='border-1' />
        {/* {header} */}

        <div className='flex items-center gap-3 my-8'>
            <h4 className='font-bold text-xl bg-accent-orange py-2 px-5 text-wh-900'>
                HOT
            </h4>
            <p className='text-sm'>Latest News in Technologies</p>
        </div>

        <div className='sm:grid grid-cols-2 grid-rows-3 gap-x-5 gap-y-3 my-2'>
            {/* Large Card */}

            <Card className='col-span-1 row-span-3 ' imageHeight='h-96' post={techPosts[0]} isLongForm={true} isSmallCard={false} />

             {/* Small Cards */}
            <Card className='col-span-1 row-span-1 mt-10 sm:mt-0' imageHeight='h-48' post={techPosts[1]} isSmallCard={true} isLongForm={false} />
            <Card className='col-span-1 row-span-1 mt-10 sm:mt-0 ' imageHeight='h-48' post={techPosts[2]} isSmallCard={true} isLongForm={false} />
            <Card className='col-span-1 row-span-1 mt-10 sm:mt-0 ' imageHeight='h-48' post={techPosts[3]} isSmallCard={true} isLongForm={false} />

        </div>
    </section>
  )
}

export default Tech