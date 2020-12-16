import React, { useState } from "react";
import styles from "../styles/MenuPage.module.css"
import Layout from "../components/Layout";
import { requestMenu } from "../util/API"

const MenuPage = ({ menu }) => {

    const [mobileMenuState, setMobileMenuState] = useState(false);

    const handleMenuButtonClick = () => {
        setMobileMenuState(mobileMenuState => !mobileMenuState);
    }

    const handleSidebarButtonClick = (newIndex) => {
        setMobileMenuState(false)
        document.getElementById(`${menu[newIndex].title}tag`).scrollIntoView({ behavior: "smooth" });
    }

    const renderMenu = menu =>
        <div id={styles.menuContainer}>
            {renderMenuSideBar(menu)}
            {renderMenuGrid(menu)}
        </div>


    const renderMenuSideBar = menu => <div id={styles.sectionSidebarWrapper}
        className={mobileMenuState ? styles.active : ""}>
        <div id={styles.sectionSidebar}>
            <h1>
                Menu
            </h1>
            <ul id={styles.sidebarElementList}>
                {menu.map((section, arrayIndex) => section.dishes.length > 0 ?
                    <li className={styles.sidebarElement}
                        onClick={() => { handleSidebarButtonClick(arrayIndex) }}>
                        {section.title}
                    </li> : "")}
            </ul>
        </div>
    </div>


    const renderMenuGrid = menu => <div id={styles.sectionMenuDisplay}>
        {menu.map(category => category.dishes.length > 0 ? <div className={styles.sectionMenuElementWrapper}>
            <h2 className={styles.sectionTitle}
                key={`${category.title}key`}
                id={`${category.title}tag`} >
                {category.title}
            </h2>
            {category.description ? <p
            >
                {category.description}
            </p> : ""}
            <div className={styles.sectionMenuGrid}>
                {category.dishes.map((dish, index) => renderMenuTile(dish, index))}
            </div>
        </div>
            :
            ""
        )}        <a href='https://www.freepik.com/vectors/background'>Background vector created by rawpixel.com - www.freepik.com</a>

    </div>


    const renderMenuTile = (dish, index) => <div key={`${dish.title}tile`}
        className={styles.sectionMenuGridElement}>
        <h4 className={styles.menuItemTitle}>
            {dish.title}
        </h4>
        {dish.description ? <p>{dish.description}</p> : ""}
        <span className={styles.menuItemPrice}>
            ${dish.price}
        </span>
    </div>


    const renderMenuMobileButton = () =>
        <div id={styles.mobileMenuButtonWrapper}>
            <button className={styles.mobileMenuButton} onClick={handleMenuButtonClick}>
                <span>
                    <i class="fas fa-chevron-left"></i>
                </span>
                     Menu
                     <style jsx>
                    {`.mobileMenuButton span{
                        opacity:1; 
                        position: absolute; transition: 1s all ease;
                    }
                         `}
                </style>
            </button>
        </div>

    return <Layout>
        {renderMenuMobileButton()}
        {renderMenu(menu)}
    </Layout>

}

export async function getStaticProps(context) {
    const res = await requestMenu();
    const menu = res.data;
    return {
        props: { menu }
    }
}


export default MenuPage;