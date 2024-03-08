import React from 'react'
import Slider from '../components/Slider'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <div>
      <Slider />

      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='text-center'>
              <Cards />
            </div>
          </div>
        </div>

      </div>
      

    </div>
  )
}
