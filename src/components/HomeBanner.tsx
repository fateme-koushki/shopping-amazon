import React from 'react'
import BannerImg from "@/assets/banner1.jpg"
import Image from 'next/image'
function HomeBanner() {
  return (
    <div>
      <Image src={BannerImg} alt='banner-img' className='w-full h-full' />
    </div>
  )
}

export default HomeBanner
