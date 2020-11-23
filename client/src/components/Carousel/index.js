import React, { useState, useEffect } from "react";
import SlideElement from "../SlideElement";
import "./CarouselFunctionalStyle.css";
import { startInterval as sliderInterval, stopInterval as stopSliderInterval } from "../intervals/";

const Carousel = props => {

    const [index, setIndex] = useState(0);
    const lastIndexOfChildrenArray = props.children.length - 1;


    useEffect(() => {
        sliderInterval(moveRight, 6000);
        return (() => stopSliderInterval())
    }, [])


    const moveRight = () => {
        setIndex(index => index < lastIndexOfChildrenArray ? index + 1 : 0);
    }

    const moveLeft = () => {
        setIndex(index => index > 0 ? index - 1 : lastIndexOfChildrenArray);
    }

    return (
        <div className="carouselSlider" onClick={stopSliderInterval}>
            {
                props.children.map(slide => {
                    return <SlideElement elementController={index} elementToDisplay={slide} />
                })
            }

            <button
                className="sliderButton"
                id="moveRightSliderButton"
                onClick={moveRight}>
                <i class="fas fa-chevron-right"></i>
            </button>

            <button
                className="sliderButton"
                id="moveLeftSliderButton"
                onClick={moveLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>



        </div >


    )
}

export default Carousel;

