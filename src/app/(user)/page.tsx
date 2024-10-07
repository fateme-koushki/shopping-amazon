import Banner from '@/components/Banner'
import BestSellers from '@/components/BestSellers'
import HomeBanner from '@/components/HomeBanner'
import NewArrival from '@/components/NewArrival'
import YearProduct from '@/components/YearProduct'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Banner/>
      <NewArrival />
      <HomeBanner />
      <BestSellers title="Our Bestsellres" />
      <YearProduct />
      <BestSellers title="Special Offers" />

    </div>
  )
}

export default HomePage
