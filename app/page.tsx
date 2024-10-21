import React from 'react'
import PortfolioComponent from '../components/portfolio'

const Home = () => {
  return (
    <div className='max-w-screen-md min-h-screen py-10 mx-auto'>
      <div className='flex flex-col items-center justify-center'>
        <PortfolioComponent />
      </div>
    </div>
  )
}

export default Home