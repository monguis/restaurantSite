import React from "react";
import styles from "../../styles/SlideElement.module.css";
import BlurImageComponent from "../BlurImageComponent"


const SlideElement = props => {

    const { elementController, elementToDisplay } = props;

    console.log(elementToDisplay)
    return (
        <div
            className={styles.slideElement}>
            <BlurImageComponent
                tinySrc={process.env.NEXT_PUBLIC_API_URL + elementToDisplay.picture.formats.small.url}
                largeSrc={process.env.NEXT_PUBLIC_API_URL + elementToDisplay.picture.url}
            />

            <style jsx>
                {`transform: translateX(${elementController * -100}%)`}
            </style>
        </div>
    )
}

export default SlideElement;

