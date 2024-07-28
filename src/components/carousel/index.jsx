import React, { useRef } from 'react';
import Slider from 'react-slick';
import './styles.scss';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Carousel = ({
    children = <></>,
    slideTitle = "",
    slideSettings = {}
}) => {
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current?.slickNext();
    };

    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        ...slideSettings
    };

    return (
        <div className="slide__container">
            <div className="flex items-center justify-between mb-4">
                <h2 className="slide__title capitalize">{slideTitle}</h2>

                <p className='text-link'>View more</p>
            </div>

            <Slider
                ref={sliderRef}
                {...settings}
            >
                {children}
            </Slider>

            <button className="slide__slide--btn btn-left" onClick={previous}>
                <BsArrowLeft />
            </button>
            <button className="slide__slide--btn btn-right" onClick={next}>
                <BsArrowRight />
            </button>
        </div>
    );
};

export default Carousel;