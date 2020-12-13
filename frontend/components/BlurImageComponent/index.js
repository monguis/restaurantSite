import React from "react";
import BlurImageHook from "./hook";

const BlurImageComponent = ({ tinySrc, largeSrc }) => {

    const [src, { blur }] = BlurImageHook(tinySrc, largeSrc);

    return (
        <>
            <img
                src={src} />

            <style jsx>
                {`width: 100%;
                height: 100%;
                object-fit: cover;
                filter: ${blur
                        ? "blur(20px)"
                        : "none"};
                transition: ${blur
                        ? "none"
                        : "filter 1.2s ease-out"};`}
            </style>
        </>
    )

}

export default BlurImageComponent;