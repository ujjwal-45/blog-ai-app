import { Post } from '@prisma/client';
import React from 'react'
import Card from './Card'

type Props = {
  otherPosts: Array<Post>;
}

const Other = ({otherPosts}: Props) => {
  return (
    <section className='pt-4 mb-16'>
        <hr className='border-1' />

        <p className='text-2xl font-bold my-8'>Other Trending Posts</p>

        <div className='sm:grid grid-col-2 row-span-2 gap-16'>

        <Card className='sm:mt-0 ' imageHeight='h-96' isLongForm={false} isSmallCard={true} post={otherPosts[0]} />
        <Card className='sm:mt-0 ' imageHeight='h-96' isLongForm={false} isSmallCard={true} post={otherPosts[1]} />
        <Card className='sm:mt-0 ' imageHeight='h-96' isLongForm={false} isSmallCard={true} post={otherPosts[2]} />
        <Card className='sm:mt-0 ' imageHeight='h-96' isLongForm={false} isSmallCard={true} post={otherPosts[3]} />
        </div>
        </section>
  )
}

export default Other