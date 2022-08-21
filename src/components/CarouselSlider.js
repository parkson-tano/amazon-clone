 import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Product from './Product';
import "../styles/Home.css"
 function CarouselSlider(props) {
   return (
     <div className="home">
       <div className="home__container w-screen">
         <Carousel
           showIndicators={false}
           showThumbs={false}
           autoPlay={true}
           infiniteLoop={true}
           showStatus = {false}
         >
           <img
             className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
           />

           <img
             className="home__image"
             src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg"
           />

           <img
             className="home__image"
             src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
           />

           <img
             className="home__image"
             src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
           />

           <img
             className="home__image"
             src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
           />

           <img
             className="home__image"
             src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg"
           />
         </Carousel>
       </div>
     </div>
   );
 }
 
 export default CarouselSlider