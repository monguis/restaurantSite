import Head from "next/head";
import NavBar from "../NavBar";


const Layout = ({ children }) => <>
    <Head>
        <title>Restaurant Site</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/22ff5ec687.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Chango&family=Open+Sans:wght@300&display=swap"
            rel="stylesheet" />
    </Head>
    <NavBar />
    {children}

</>


export default Layout;
