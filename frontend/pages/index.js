import Carousel from "../components/Carousel/";
import Layout from "../components/Layout";
import ContainerComponent from "../components/ContainerComponent";
import BlurImageComponent from "../components/BlurImageComponent";
import { requestCarousel } from "../util/API"
// import picture1Large from "../components/Carousel/images/picture1Large.jpg";
// import picture1Small from "../../components/Carousel/images/picture1Small.jpg";

// import picture2Large from "../../components/Carousel/images/picture2Large.jpg";
// import picture2Small from "../../components/Carousel/images/picture2Small.jpg";

// import picture3Large from "../../components/Carousel/images/picture3Large.jpg";
// import picture3Small from "../../components/Carousel/images/picture3Small.jpg";

const Index = ({ carousel }) =>
    <Layout>
        <Carousel slideResponse={carousel} />

        <ContainerComponent>
            <h2>
                hot links
            </h2>
            <h2>

            </h2>
            <h2>
                map
        </h2>
        </ContainerComponent>
    </Layout>

export async function getStaticProps(context) {
    const res = await requestCarousel();
    const carousel = await res.data;
    return {
        props: { carousel }
    }
}
export default Index;