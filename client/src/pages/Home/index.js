import React from "react";
import Carousel from "../../components/Carousel/";
import NavBar from "../../components/NavBar";
import { ViewportProvider } from "../../util/contexts/ViewportContext/";

const Home = () => {

    return (<div>

            <Carousel
             onLoad={"this.handleImageLoaded.bind(this)"}
             onError={"this.handleImageLoaded.bind(this)"}
            >
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
    
    </div>)
}

export default Home;