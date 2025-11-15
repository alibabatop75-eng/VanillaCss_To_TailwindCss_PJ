import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center px-4" 
      style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/landing.jpg)'}}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-rufina text-white mb-4">BE OUR GUEST</h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-light">LIVE LIKE A KING IN OUR BEST HOUSES</p>
    </section>
  )
}

export default HeroSection