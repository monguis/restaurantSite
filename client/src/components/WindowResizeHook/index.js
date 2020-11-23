import { useState, useEffect } from "react";

const WindowResizeHook = () => {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);


    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

        }
    }, [])
    return size
}

export default WindowResizeHook;