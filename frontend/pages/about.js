import ContainerComponent from "../components/ContainerComponent"
import Layout from "../components/Layout";
import React from "react";
import AboutStoryDiv from "../components/AboutStoryDiv/"

const AboutPage = () => {
    return <Layout>
        <ContainerComponent>
            <AboutStoryDiv />
        </ContainerComponent>
    </Layout>
}

export default AboutPage;