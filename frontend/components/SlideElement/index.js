import React from "react";
import styles from "../../styles/SlideElement.module.css"


const SlideElement = props => {

const {elementController, elementToDisplay} = props;
    return (
        <div
            className={styles.slideElement}>
            {elementToDisplay}
            <style jsx>
                {`transform: translateX(${elementController * -100}%)`}
            </style>
        </div>
    )
}

export default SlideElement;

