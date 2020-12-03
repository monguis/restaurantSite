import React, { useState, useEffect } from "react";

const FadeTextDiv = ({ children, transitionTime }) => {

    const [textToShow, setTextToShow] = useState(children);
    const [fadeDiv, setFadeDiv] = useState(false);

    useEffect(() => {
        if (textToShow !== children) {
            FadeDivFunction()
        }
    }, [children])

    const FadeDivFunction = () => {
        setFadeDiv(true)
        const fadeTimeout = setTimeout(() => {
            setTextToShow(children)
            setFadeDiv(false)
        }, 250);
        clearTimeout(fadeTimeout)
    }

    return (
        <div style={{ opacity: fadeDiv ? "0" : "1", transition: `${transitionTime}s opacity ease-in-out` }}>
            {textToShow}
        </div>)
}

export default FadeTextDiv;