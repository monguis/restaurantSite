import React from "react";
import "./SlideElementStyles.css"


const SlideElement = props => {

const {elementController, elementToDisplay} = props;
    return (
        <div
            className="slideElement"
            style={{
                transform: `translateX(${elementController * -100}%)`
            }}>

            {elementToDisplay}

        </div>
    )
}

export default SlideElement;

