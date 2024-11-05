import React from 'react'
import Container from './layout/Container'
import Ads02 from "../../public/Ads_2.jpg"

const Ad02 = () => {
  return (
    <div className='pb-32'>
        <Container>
            <img className='w-full' src={Ads02} alt="" />
        </Container>
    </div>
  )
}

export default Ad02