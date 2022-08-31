import Link from 'next/link';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BannerSliderOne from '../../assets/home-banner-1.jpeg'
import { HomeSliderContainer } from './style';

function HomeSlider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <HomeSliderContainer>
        <div className='carousel__desktop'>
            <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/home-banner-1.jpeg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/home-banner-2.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='carousel__mobile'>
            <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/banner-mob-3.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://raw.githubusercontent.com/thiagosullivan/alemao-futebol/main/assets/banner-mob-2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    </HomeSliderContainer>
  )
}

export default HomeSlider