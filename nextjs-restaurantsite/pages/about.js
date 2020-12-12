import ContainerComponent from "../components/ContainerComponent"
import Layout from "../components/Layout";
import React from "react";

const AboutPage = () => {
    return <Layout>
        <ContainerComponent>
            <div>
                <h1>
                    Our Story
                </h1>
                <div style={{ position: "relative", height: "300px", margin:"2rem 0" }}>
                    <div style={{ position: "absolute", width: "40%", height:"100%", backgroundColor:"red" }}>
                            picture to Inject
                    </div>
                    <div style={{ position: "absolute", width: "60%", height:"100%", backgroundColor:"blue" ,right:0}}>
                            <p>
                                paragraph to inject
                            </p>
                    </div>
                    
                </div>

                <div style={{width:"100%",height:"500px", margin:"2rem 0" , backgroundColor:"black", color:"white"}}>
                    location map?
                        
                    </div>
            </div>
        </ContainerComponent>
    </Layout>
}

export default AboutPage;