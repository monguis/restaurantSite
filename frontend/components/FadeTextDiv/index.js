import React, { useState, useEffect } from "react";

const FadeTextDiv = ({ children }) => {

    const [contentToShow, setContentToShow] = useState(children);
    const [fadeDiv, setFadeDiv] = useState(true);

    useEffect(() => {
        fadeDivFunction()
    }, [children])

    const fadeDivFunction = () => {
        setFadeDiv(true)
        const fadeTimeout = setTimeout(() => {
            setFadeDiv(false)
            setContentToShow(children)
        }, 250)
    }

    return (
        <div className="fadeDiv">
            {contentToShow}
            <style jsx>
                {
                    `.fadeDiv{
                    opacity: ${fadeDiv ? "0" : "1"};
                    transition: 0.25s opacity ease-in-out;
                    }`
                }

            </style>
        </div>)
}

export default FadeTextDiv;