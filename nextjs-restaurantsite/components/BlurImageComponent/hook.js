import React from "react";

const BlurImageHook = (lowQualitySrc, highQualitySrc) => {
    const [src, setSrc] = React.useState(lowQualitySrc);

    React.useEffect(() => {
        setSrc(lowQualitySrc);

        const img = new Image;
        img.src = highQualitySrc;

        img.onload = () => {
            setSrc(highQualitySrc);
            console.log("loaded")
        };
        console.log(src)
    }, [lowQualitySrc, highQualitySrc]);

    return [src, { blur: src === lowQualitySrc }];
};


export default BlurImageHook;