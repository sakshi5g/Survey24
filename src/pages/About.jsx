import React from 'react'
import Cards from '../components/Cards'
export default function About() {
  return (
    <div className='justify-content-center align-items-center mt-4 top-50'>
      <h1 className='justify-content-center '>ABOUT US</h1>
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
