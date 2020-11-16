import React, { useState } from "react";

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
                props.children.map(item => {
                    return <div
                        className="slide"
                        style={{
                            border: "1px solid blue",
                            minWidth: "100%",
                            minHeight: "100%",
                            transform: `translateX(${index * -100}%)`,
                            transition: "0.5s"
                        }}>

                        {item}

                    </div>
                })
            }

            <button
                className="sliderButton"
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "5%",
                    height: "100%"
                }}
                onClick={moveRight}>
                +
            </button>

            <button
                className="sliderButton"
                onClick={moveLeft}
                style={{
                    backgroundColor: "transparent",
                    border:"none",
                    left: 0,
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "5%",
                    height: "100%"
                }}>
                -
                </button>



        </div >


    )
}

export default Carousel;

