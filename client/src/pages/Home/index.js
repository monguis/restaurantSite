import React from "react";
import Carousel from "../../components/Carousel/";
import LocationMap from "../../components/LocationMap";
import NavBar from "../../components/NavBar";
import { ViewportProvider } from "../../components/ViewportContext";
import MenuPage from "../MenuPage"


const Home = () => {

    return (<div>
        <ViewportProvider>
            <NavBar />

            {/* <LocationMap /> */}


            {/* <MenuPage /> */}

            {/* <Carousel>
                <img src="https://picsum.photos/2200" alt="1" />
                <img src="https://picsum.photos/2200" alt="1" />
                <img src="https://picsum.photos/2200" alt="1" />
            </Carousel>
            <h2>hot clicks
            
            </h2>
            <h2>

            </h2>
            <h2>
                map
                </h2>
            <footer>
                footer
            </footer> */}
        </ViewportProvider>
    </div>)
}

export default Home;