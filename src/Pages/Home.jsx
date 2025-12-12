import React from 'react'
import Hero from '../Components/Hero'
import HowWeWork from '../Components/HowWeWork'
import WhyChooseUs from '../Components/WhyChooseUs'
import ServicesAndFeatures from '../Components/ServicesAndFeatures'
import FAQ from '../Components/FAQ'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HowWeWork/>
        <WhyChooseUs/>
        <ServicesAndFeatures/>
        <FAQ/>
    </div>
  )
}

export default Home