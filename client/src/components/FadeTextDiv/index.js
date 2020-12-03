import React, { useState, useEffect } from "react";

const FadeTextDiv = ({ children }) => {

    const [contentToShow, setContentToShow] = useState(children);
    const [fadeDiv, setFadeDiv] = useState(false);

    useEffect(() => {
        if (contentToShow !== children) {
            fadeDivFunction()
        }
    }, [children])

    const fadeDivFunction = () => {
        setFadeDiv(true)
        const fadeTimeout = setTimeout(() => {
            setFadeDiv(false)
            setContentToShow(children)
        }, 250)
    }

    return (
        <div style={{ opacity: fadeDiv ? "0" : "1", transition: "0.25s opacity ease-in-out" }}>
            {contentToShow}
        </div>)
}

export default FadeTextDiv;