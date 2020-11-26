import React, { useContext, useEffect, useState } from "react";

const ViewportContext = React.createContext({});

export const useViewportContext = () => {
  const [width, height] = useContext(ViewportContext);
  return { width, height };
};

export const ViewportProvider = ({ children }) => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  const handleResize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("resize", handleResize) };
  }, []);

  return (
    <ViewportContext.Provider value={size}>
      {children}
    </ViewportContext.Provider>
  )
}