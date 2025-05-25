import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {MainCarouselData} from './MainCauselData'



const MainCarousel = () =>{

    const items = MainCarouselData.map((item) => (
            <img className='cursor-pointer h-[600px] w-full' key={item.image} role='presentation' src={item.image} alt={item.path}/>
        ))
return (
    <AliceCarousel
      
        items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    />
)};

export default MainCarousel


 