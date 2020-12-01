import React, { useState, useEffect } from "react";
import SlideElement from "../SlideElement";
import "./CarouselFunctionalStyle.css";
import { startInterval as sliderInterval, stopInterval as stopSliderInterval } from "../intervals/";

const Carousel = ({ children }) => {

    const [index, setIndex] = useState(0);
    const lastIndexOfChildrenArray = children.length - 1;


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

    const setIndexTo = (newIndex) => {
        setIndex(newIndex);
    }

    return (
        <div className="carouselSlider" onClick={stopSliderInterval}>
            {
                children.map(slide => {
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

            <div className="carouselInfoLoader" >
                <div className="infoLoaderTextField">
                    <h3>
                        HOla como estan
                    </h3>
                </div>

            </div>

            <ul className="circleButtonList">
                {children.map((_, childIndex) =>
                    <li>
                        <button className={`${childIndex === index ? "circleButton active" : "circleButton"}`} onClick={() => setIndexTo(childIndex)}>
                            <i className="fas fa-circle"></i>
                        </button>
                    </li>)}
            </ul>
        </div >


    )
}

export default Carousel;

