import React, { useState } from "react";
import SlideElement from "../SlideElement"
import  "./CarouselStyles.css"

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
        <div className="slider"
            style={{
                overflow: "hidden",
                position: "relative",
                maxWidth: "100%",
                maxHeight: "100%",
                boxSizing: "border-box",
                margin: 0, padding: 0,
                display: "flex",
                alignItems: "center"
            }}>
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

