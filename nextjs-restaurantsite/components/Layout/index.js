import Head from "next/head";
import ContainerComponent from "../ContainerComponent";
import NavBar from "../NavBar";


const Layout = ({ children }) => <>
    <Head>
        <title>Restaurant Site</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/22ff5ec687.js" crossorigin="anonymous"></script>

    </Head>
    <NavBar />
    <ContainerComponent>
        {children}
    </ContainerComponent>
</>


export default Layout;
