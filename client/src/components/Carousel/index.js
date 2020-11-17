import React, { useState } from "react";
import SlideElement from "../SlideElement"
import  "./CarouselFunctionalStyle.css";
import  "./CarouselDesignStyle.css";

const Carousel = props => {

    const [index, setIndex] = useState(0)

    const moveRight = () => {
        console.log(index)
        if (index < props.children.length - 1)
            setIndex(index + 1)
    }

    const moveLeft = () => {
        if (index > 0)
            setIndex(index - 1)
    }

    return (
        <div className="carouselSlider">
            {
                props.children.map(slide => {
                    return <SlideElement elementController={index} elementToDisplay={slide}/>
                })
            }

            <button
                className="sliderButton"
                id="moveRightSliderButton"
                onClick={moveRight}>
                +
            </button>

            <button
                className="sliderButton"
                id="moveLeftSliderButton"
                onClick={moveLeft}>
                -
                </button>



        </div >


    )
}

export default Carousel;

