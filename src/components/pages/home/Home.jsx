import React from 'react'
// import MyCarousel from '../'
// import MyCarousel from '../casrousel/MyCarousel'
import Announcement from '../announcement/Announcement'
import Gallery from '../gallery/Gallery'
import MyCarousel from '../casrousel/MyCarousel'
// import MyCarousel from '../casrousel/carousel'
import Reviews from '../feedback/reviews'


import Team from '../ourteam/Team'
const Home = () => {
  return (
    <div>
      <MyCarousel />

      <Announcement />
      <Team />
      <Reviews />
      <Gallery />
      {/* <Contact/> */}
    </div>
  )
}

export default Home
