import React from "react";
import styles from "../../styles/SlideElement.module.css";
import BlurImageComponent from "../BlurImageComponent"


const SlideElement = props => {

    const { elementController, elementToDisplay } = props;
    
    return (
        <div
            className={styles.slideElement}>
            <BlurImageComponent
                tinySrc={elementToDisplay.picture.formats.small.url}
                largeSrc={elementToDisplay.picture.url}
            />

            <style jsx>
                {`transform: translateX(${elementController * -100}%)`}
            </style>
        </div>
    )
}

export default SlideElement;

