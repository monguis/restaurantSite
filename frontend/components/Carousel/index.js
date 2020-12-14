import React, { useState, useEffect } from "react";
import SlideElement from "../SlideElement";
import styles from "../../styles/Carousel.module.css";
import { startInterval as sliderInterval, stopInterval as stopSliderInterval } from "../intervals/";
import  Link  from "next/link"
import FadeTextDiv from "../FadeTextDiv";

const Carousel = ({ slideResponse }) => {

    const [index, setIndex] = useState(0);
    const lastIndexOfslideResponseArray = slideResponse.length - 1;


    useEffect(() => {
        sliderInterval(moveRight, 6000);
        return (() => stopSliderInterval())
    }, [])


    const moveRight = () => {
        setIndex(index => index < lastIndexOfslideResponseArray ? index + 1 : 0);
    }

    const moveLeft = () => {
        setIndex(index => index > 0 ? index - 1 : lastIndexOfslideResponseArray);
    }

    const setIndexTo = (newIndex) => {
        setIndex(newIndex);
    }

    return (
       
        <div className={styles.carouselSlider} onClick={stopSliderInterval}>
            {
                slideResponse.map(slide => {
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
                        {slideResponse[index].message}
                    </h2>
                    <Link href="/menu">
                        <button className={styles.infoContainerButton}  >
                            Menu
                        </button>
                    </Link>
                </FadeTextDiv>
            </div>





            <ul className={styles.circleButtonList}>
                {slideResponse.map((_, slideIndex) =>
                    <li>
                        <button className={slideIndex === index ? `${styles.circleButton} ${styles.active}` : `${styles.circleButton}`} onClick={() => setIndexTo(slideIndex)}>
                            <i className="fas fa-circle"></i>
                        </button>
                    </li>)}
            </ul>
        </div >


    )
}

export default Carousel;

