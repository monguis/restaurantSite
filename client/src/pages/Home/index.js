import React from "react";
import Carousel from "../../components/Carousel/"
const Home = () => {



    return (<div>
        <h2>
            menu bar
        </h2>
        <div style={{height:"100px", width:"100%"}}>
        <Carousel>
            <img src="https://picsum.photos/200/301" alt="1"/>
            <img src="https://picsum.photos/200/302" alt="1"/>
            <img src="https://picsum.photos/200/303" alt="1"/>
        </Carousel>
        </div>
        <h2>hot clicks</h2>
        <h2></h2>
        <h2>map</h2>
        <footer>
            footer
        </footer>
    </div>)
}

export default Home;