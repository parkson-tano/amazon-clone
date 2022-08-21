import React from 'react'
import CarouselSlider from '../components/CarouselSlider'
import Category from '../components/Category'
import Menubar from '../components/common/Menubar'
import Navbar from '../components/common/Navbar'
import Prefooter from '../components/common/Prefooter'
import Homebody from '../components/Homebody'
import Product from '../components/Product'
import ProductCarousel from '../components/ProductCarousel'

function HomePage() {
  return (
    <div className='bg-gray-200'>
      <Navbar username="Daniel" address="Yaounde" zip_code="32544" />
      <Menubar username="Daniel" />
      <CarouselSlider />
      <Homebody />
      <Prefooter />
    </div>
  );
}

export default HomePage