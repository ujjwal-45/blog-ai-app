import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image'
import Ad2 from 'public/assets/ad-2.png'
import aboutProfile from 'public/assets/about-profile.jpg'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
           <h4 className='font-bold text-xs bg-wh-900 py-3 px-5 text-center text-wh-50'>
                Subscribe and Follow
            </h4>
            <div className='my-5 mx-5'>
            <SocialLinks isDark />
            </div>
            <Subscribe />
            <div ><Image className='hidden md:block my-8 w-full' alt="Ad image-2" src={Ad2} width={500} height={1000}  /></div>
            <h4 className='font-bold text-xs text-center bg-wh-900 py-2 px-5 text-wh-50'>
                About the Blog
            </h4>   
            <div className=' my-3 flex justify-center'><Image  style={{ width: "500px", height: "250px", objectFit: "cover" }} alt="profile image" src={aboutProfile} /></div>

            <h4 className='font-bold text-xs text-center  py-2 px-5 text-wh-900'>
               Emily Smith
            </h4> 
           
           
    </section>
        
  )
}

export default Sidebar