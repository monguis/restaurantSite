import React from "react";
import BlurImageHook from "./hook";

const BlurImageComponent = ({ tinySrc, largeSrc }) => {

    const [src, { blur }] = BlurImageHook(tinySrc, largeSrc);

    return (
        <img
            src={src}
            style={{
                width: "100%",
                height:"100%",
                filter: blur
                    ? "blur(20px)"
                    : "none",
                transition: blur
                    ? "none"
                    : "filter 1.2s ease-out"
            }}
        />
    )

}

export default BlurImageComponent;