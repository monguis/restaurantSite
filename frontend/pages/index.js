import Carousel from "../components/Carousel/";
import Layout from "../components/Layout";
import ContainerComponent from "../components/ContainerComponent";
import BlurImageComponent from "../components/BlurImageComponent"
// import picture1Large from "../components/Carousel/images/picture1Large.jpg";
// import picture1Small from "../../components/Carousel/images/picture1Small.jpg";

// import picture2Large from "../../components/Carousel/images/picture2Large.jpg";
// import picture2Small from "../../components/Carousel/images/picture2Small.jpg";

// import picture3Large from "../../components/Carousel/images/picture3Large.jpg";
// import picture3Small from "../../components/Carousel/images/picture3Small.jpg";

const Index = () => 
<Layout>
    <Carousel>
       <BlurImageComponent tinySrc={"/images/picture1Small.jpg"} largeSrc={"/images/picture1Large.jpg"} />
       <BlurImageComponent tinySrc={"/images/picture2Small.jpg"} largeSrc={"/images/picture2Large.jpg"} />
       <BlurImageComponent tinySrc={"/images/picture3Small.jpg"} largeSrc={"/images/picture3Large.jpg"} />        
    </Carousel>  

    <ContainerComponent>
        <h2>hot clicks
            
        </h2>
        <h2>

        </h2>
        <h2>
            map
        </h2>
    </ContainerComponent>
</Layout>


export default Index;