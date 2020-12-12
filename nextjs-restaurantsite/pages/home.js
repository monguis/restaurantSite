import Carousel from "../components/Carousel/";
import BlurImageComponent from "../components/BlurImageComponent/";
import Layout from "../components/Layout";

// import picture1Large from "../../components/Carousel/images/picture1Large.jpg";
// import picture1Small from "../../components/Carousel/images/picture1Small.jpg";

// import picture2Large from "../../components/Carousel/images/picture2Large.jpg";
// import picture2Small from "../../components/Carousel/images/picture2Small.jpg";

// import picture3Large from "../../components/Carousel/images/picture3Large.jpg";
// import picture3Small from "../../components/Carousel/images/picture3Small.jpg";

const Home = () => {

    return (<Layout>
    

     
       
             <Carousel>
                 {/* <BlurImageComponent tinySrc = {picture1Small} largeSrc = {picture1Large}/>
                 <BlurImageComponent tinySrc = {picture3Small} largeSrc = {picture3Large}/>
                 <BlurImageComponent tinySrc = {picture2Small} largeSrc = {picture2Large}/> */}
                 {[12,3,4]}
             </Carousel> 
            
            <h2>hot clicks
            
            </h2>
            <h2>

            </h2>
            <h2>
                map
                </h2>
    
    </Layout>)
}

export default Home;
