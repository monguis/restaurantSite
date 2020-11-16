import React, { useState } from "react";

const Carousel = props => {

    const [index, setIndex] = useState(0)

    const moveForward = () => {
        console.log(index)
        if (index < props.children.length - 1)
            setIndex(index + 1)
    }

    const moveBackward = () => {
        if (index > 0)
            setIndex(index - 1)
    }

    return (<>
        <div className="slider"
            style={{
                width: "100%",
                height: "100vh",
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
                            height: "80vh",
                            transform: `translateX(${index * -100}%)`,
                            transition: "0.5s"
                        }}>
                            
                        {item}

                    </div>
                })
            }

        </div >
        <button onClick={moveForward}>+</button>
        <button onClick={moveBackward}>-</button>
    </>
    )
}

export default Carousel;