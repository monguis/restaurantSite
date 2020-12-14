import Carousel from "../components/Carousel/";
import Layout from "../components/Layout";
import ContainerComponent from "../components/ContainerComponent";
import { requestCarousel, requestHotlinks } from "../util/API";
import HotlinkContainer from "../components/HotlinkContainer/index";

const Index = ({ carousel, hotlinks }) =>
    <Layout>
        <Carousel slideResponse={carousel} />

        <ContainerComponent>
            
                <HotlinkContainer hotlinkResponse={hotlinks} />
            <h2>

            </h2>
            <h2>
                map
        </h2>
        </ContainerComponent>
    </Layout>

export async function getStaticProps(context) {

    const promiseArray = [
        requestCarousel(),
        requestHotlinks(),
    ]

    const resultArray = [];

    await Promise.all(promiseArray).then(responses => responses.map(res => resultArray.push(res.data)))
    
    const [carousel, hotlinks] = resultArray;

    return {
        props: { carousel, hotlinks }
    }
}
export default Index;