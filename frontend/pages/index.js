import Carousel from "../components/Carousel/";
import Layout from "../components/Layout";
import ContainerComponent from "../components/ContainerComponent";
import { requestCarousel } from "../util/API";
import HotlinkContainer from "../components/HotlinkContainer/index";

const Index = ({ carousel }) =>
    <Layout>
        <Carousel slideResponse={carousel} />

        <ContainerComponent>
            <div>
                <HotlinkContainer />
            </div>
            <h2>

            </h2>
            <h2>
                map
        </h2>
        </ContainerComponent>
    </Layout>

export async function getStaticProps(context) {
    
    // const 
    const res = await requestCarousel();
    const carousel = await res.data;
    return {
        props: { carousel }
    }
}
export default Index;