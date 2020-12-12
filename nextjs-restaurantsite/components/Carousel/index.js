import React, { useState, useEffect } from "react";
import SlideElement from "../SlideElement";
import styles from "../../styles/Carousel.module.css";
import { startInterval as sliderInterval, stopInterval as stopSliderInterval } from "../intervals/";
import  Link  from "next/link"
import FadeTextDiv from "../FadeTextDiv";

const Carousel = ({ children }) => {

    const messages = [
        "Come Celebrate the Mexican Cuisine (insertar data aqui)1",
        "Come Celebrate the Mexican Cuisine (insertar data aqui)2",
        "Come Celebrate the Mexican Cuisine (insertar data aqui)3"
    ]

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
        <div className={styles.carouselSlider} onClick={stopSliderInterval}>
            {
                children.map(slide => {
                    return <SlideElement elementController={index} elementToDisplay={slide} />
                })
            }

            <button
                className={styles.sliderButton}
                id={styles.moveRightSliderButton}
                onClick={moveRight}>
                <i class="fas fa-chevron-right"></i>
            </button>

            <button
                className={styles.sliderButton}
                id={styles.moveLeftSliderButton}
                onClick={moveLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>

            <div className={styles.carouselShadowFrame} >
                <FadeTextDiv>
                    <h2 className={styles.infoContainerTextField} >
                        {messages[index]}
                    </h2>
                    <Link href="/menu">
                        <button className={styles.infoContainerButton}  >
                            Menu
                        </button>
                    </Link>
                </FadeTextDiv>
            </div>





            <ul className={styles.circleButtonList}>
                {children.map((_, childIndex) =>
                    <li>
                        <button className={childIndex === index ? `${styles.circleButton} ${styles.active}` : `${styles.circleButton}`} onClick={() => setIndexTo(childIndex)}>
                            <i className="fas fa-circle"></i>
                        </button>
                    </li>)}
            </ul>
        </div >


    )
}

export default Carousel;

